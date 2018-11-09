const mongoose = require('mongoose');

mongoose.connect('mongodb://bruno:bruno123@ds157843.mlab.com:57843/datab', {useNewUrlParser: true});

module.exports = {
  mongoose
};