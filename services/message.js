module.exports = {
	allMessages (db) {
		return db.collection("messages").find({});
	},

	newMessage (db, text, senderId, recieverId) {
		db.collection("messages").insertOne({'_id': Date.now(), 'text': text, 
			'senderId': senderId, 'recieverId': recieverId });
	},

	findMessage (db, id) {
		return db.collection("messages").find({_id: Number(id)});
	},

	findSender (db, sender) {
		return db.collection("messages").find({"senderId": sender});
	},

	deleteMessage (db, id) {
		db.collection("messages").remove({"_id": Number(id)});
	},

	updateMessage (db, id, text) {
		db.collection("messages").updateOne({"_id": Number(id)},{ $set: {'text': text}});
	}
};