const mongoose = require('mongoose');

const userTodo = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1
  }
});

module.exports = {
  userTodo
};