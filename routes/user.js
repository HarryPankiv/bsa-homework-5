const app = require('express')();
const userService = require('../services/user');
const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/bsaDB";

app.get('/all', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			userService.allUsers(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		});
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

app.get('/:id', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			userService.findUser(database.db(), req.params.id).toArray( function(err, data) {
				res.send(data[0]);
			});;
		})
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

app.post("/", (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			userService.newUser(database.db(), req.body.name);
			userService.allUsers(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		})
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

app.put('/:id', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			userService.updateUser(database.db(), req.params.id, req.body.name);
			userService.allUsers(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		})
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});


app.delete('/:id', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			userService.deleteUser(database.db(), req.params.id);
			userService.allUsers(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		})
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

module.exports = app;