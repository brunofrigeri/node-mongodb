const {mongoose} = require('../db/mongoose');
const {Todo} = require('../models/todo');
const {ObjectID} = require('mongodb');
const {User} = require('../models/user');
const id = '5be58ac931a6042734303f9d';

// if(!ObjectID.isValid(id)){
//   console.log('ID is not valid.');
// }

// Todo.find({
//   _id: id
// }).then( (todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log('Todo', todo)
// });

User.findById(id).then((user) => {
  if(!user){
    return console.log('Id not found.');
  }
  console.log('User By Id', user);
}, (e) => {
  console.log(e);
});