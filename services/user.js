// var ObjectId = require('mongodb').ObjectId;

module.exports = {
	allUsers (db) {
		return db.collection("users").find({});
	},

	newUser (db, name) {
		db.collection("users").insertOne({'_id': Date.now(), 'name': name});
	},

	findUser (db, id) {
		// var id = new ObjectId(id);
		return db.collection("users").find({_id: Number(id)})
	},

	deleteUser (db, id) {
		db.collection("users").remove({"_id": Number(id)})
	},

	updateUser (db, id, name) {
		db.collection("users").updateOne({"_id": Number(id)},{ $set: {'name': name}});
	}
};