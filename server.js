require('./src/config/config');
const express = require('express');
//const requireDir = require('require-dir');
const {mongoose} = require('./src/db/mongoose');

const app = express();
const port = process.env.PORT;

app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
// mongoose.set('useFindAndModify', true);

app.use('/', require('./src/routes'));

app.listen(port);

