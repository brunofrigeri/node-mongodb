const mongoose = require('mongoose');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const {User} = require('../models/user');

module.exports = {
  async postUser(req, res) {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User({
      email: body.email,
      password: body.password
    });

    user.save().then(() => {
      return user.generateAuthToken();      
    }).then((token) => {      
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send();
    })
  },

  async getUser (req, res) {
    res.send(req.user);
  },

  async loginUser (req, res) {
    var body = _.pick(req.body, ['email', 'password']);

    User.findByCredentials(body.email, body.password).then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      });
    }).catch((e) => {
      res.status(400).send();
    });
  },

  async logOutUser (req, res) {
    req.user.removeToken(req.token).then(() => {
      res.status(200).send();
    }, () => {
      res.status(400).send();
    });
  }



};