const mongoose = require('mongoose');

const {Todo} = require('../models/todo');

module.exports = {
  async postSomeTodo(req, res) {
    const todo = await Todo.create(req.body);

    return res.json(todo);
  },
  
  async getTodoById(req, res) {
    const todo = await Todo.findById(req.params.id);

    return res.json(todo);
  },

  async getAll(req, res) {
    const todos = await Todo.find();

    return res.json(todos);
  }, 

  async deleteById(req, res) {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    return res.json(todo);
  },  

  async updateById(req, res) {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});

    return res.json(todo);
  }
};