const express = require('express');
//const requireDir = require('require-dir');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

app.use('/', require('./src/routes'));

app.listen(3000);

