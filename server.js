const express = require('express');
//const requireDir = require('require-dir');
const mongoose = require('./src/db/mongoose');

const app = express();

const { Todo } = require('./src/models/todo');
const { User } = require('./src/models/user');

app.use('/', require('./src/routes'));
app.use(express.json());

 app.post('/todos', (req, res) => {
   var todo = new Todo ({
     text: req.body.text
   });
   todo.save().then((doc) => {
     res.send(doc);
   }, (e) => {
     res.status(400).send(e);
   });
 });

 app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000);

