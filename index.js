const express = require('express');
const connection = require('./db');
const userRoute = require('./routes/user');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/product', userRoute);

module.exports = app;
