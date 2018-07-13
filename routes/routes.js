const express = require('express');
const router = express.Router();
const user = require('./user.js');
const message = require('./message.js');

module.exports = function(app){
	app.use('/user', user);
	app.use('/message', message);
};