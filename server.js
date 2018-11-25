const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes/router')(app);
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;