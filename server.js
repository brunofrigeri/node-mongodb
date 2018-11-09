const express = require('express');
//const requireDir = require('require-dir');
const mongoose = require('./src/db/mongoose');

const app = express();
app.use(express.json());
//const { User } = require('./src/models/user');

app.use('/', require('./src/routes'));

app.listen(3000);

