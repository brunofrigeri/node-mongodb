const express = require('express');
const routes = express.Router();
const TodoController = require('./controllers/TodoControllers');
const UserController = require('./controllers/UserControllers');

//Todo routes Controllers
routes.post('/todos', TodoController.postSomeTodo);
routes.get('/todos', TodoController.getAll);
routes.get('/todos/:id', TodoController.getTodoById);
routes.delete('/todos/:id', TodoController.deleteById);
routes.put('/todos/:id', TodoController.updateById);

//User routes Controllers

module.exports = routes;