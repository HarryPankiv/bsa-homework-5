const app = require('express')();
const messageService = require('../services/message');
const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/bsaDB";

app.get('/all', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			messageService.allMessages(database.db()).toArray( function(err, data) {
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
			messageService.findMessage(database.db(), req.params.id).toArray( function(err, data) {
				res.send(data);
			});
		});
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

app.get('/:id/messages', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			messageService.findSender(database.db(), req.params.id).toArray( function(err, data) {
				res.send(data);
			});
		});
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

app.post("/:id", (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			messageService.newMessage(database.db(), req.body.text, req.params.id, req.body.receiver);
			messageService.allMessages(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		});
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

app.put('/:id', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			messageService.updateMessage(database.db(), req.params.id, req.body.text);
			messageService.allMessages(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		});
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});


app.delete('/:id', (req, res) => {
	try {
		mongoClient.connect(url, function(err, database){
			messageService.deleteMessage(database.db(), req.params.id)
			messageService.allMessages(database.db()).toArray( function(err, data) {
				res.send(data);
			});
		});
	} catch (error) {
		res.sendStatus(400);
		res.end();
	}
});

module.exports = app;