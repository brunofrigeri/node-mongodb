const mongoose = require('mongoose');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
const {Todo} = require('../models/todo');

module.exports = {
  async postSomeTodo(req, res) {
    
    var todo = new Todo({
      text: req.body.text, 
      _creator: req.user._id     
    });

    todo.save().then((todo) => {
      if(!todo){
        return res.status(404).send();
      }
      
      res.send(todo);
    }).catch((e) => {
      res.status(400).send();
    })
  },
  
  async getTodoById(req, res) {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }

    Todo.findOne({
      _id: id,
      _creator: req.user._id
    }).then((todo) => {
      if(!todo){
        return res.status(404).send();
      }

      res.send(todo);
    }).catch((e) => {
      res.status(400).send();
    })

  },

  async getAll(req, res) {        
    Todo.find({
      _creator: req.user._id
    }).then((todos) => {
      if(!todos){
        res.status(404).send();
      }

      res.send(todos);
    }).catch((e) => {
      res.status(400).send();
    });
  }, 

  async deleteById(req, res) {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }

    Todo.findOneAndDelete({
      _id: id,
      _creator: req.user._id
    }).then((todo) =>  {
      if(!todo){
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  },  

  async updateById(req, res) {
    var id = req.params.id;
    //Subconjunto que o usuário passou para nós
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }
    
    if(_.isBoolean(body.completed) && body.completed){
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findOneAndUpdate({
      _id: id,
      $set: body,
      new: true,
      _creator: req.user._id
    }).then((todo) => {
      if(!todo){
        return res.status(404).send();
      }

      res.send(todo);
    }).catch((e) => {
      res.status(400).send();
    });    

  }

};