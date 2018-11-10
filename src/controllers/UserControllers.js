const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const {User} = require('../models/user');

module.exports = {
  async postUser(req, res) {
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);

    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    });

  },

  async getSomething(req, res) {
    res.send(req.user);
  },

  async getLogin(req, res) {
    const body = _.pick(req.body, ['email', 'password']);
    
    User.findByCredentials(body.email, body.password).then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      });      
    }).catch((e) => {
      res.status(400).send();
    });
  }
};