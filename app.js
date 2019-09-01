const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/entregas', require('./api/routes/entregas'));
app.use('/api/users', require('./api/routes/users'));

app.use(require('./api/middleware/not-found'));

module.exports = app;