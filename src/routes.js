const express = require('express');
const routes = express.Router();
const TodoController = require('./controllers/TodoControllers');
const UserController = require('./controllers/UserControllers');
const {authenticate} = require('./middleware/authenticate');

//Todo routes Controllers
routes.post('/todos', authenticate, TodoController.postSomeTodo);
routes.get('/todos', authenticate, TodoController.getAll);
routes.get('/todos/:id', authenticate, TodoController.getTodoById);
routes.delete('/todos/:id', authenticate,TodoController.deleteById);
routes.put('/todos/:id', authenticate, TodoController.updateById);

//User routes Controllers
routes.post('/users', UserController.postUser);
routes.get('/users/me', authenticate, UserController.getUser);
routes.post('/users/login', UserController.loginUser);
routes.delete('/users/login/me/token', authenticate, UserController.logOutUser);

module.exports = routes;