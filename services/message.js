class Message {
	constructor (id, sender, receiver, text) {
		this.id = id;
		this.sender = sender;
		this.receiver = receiver;
		this.text = text;
	}
}

let messages = [];

module.exports = {
	allMessages () {
		return messages;
	},

	newMessage (data) {
		return new Message(Date.now(), data.sender, data.receiver, data.text);
	},

	findMessage (id) {
		return messages.find(message => message.id == id);
	},

	findSender (sender) {
		return messages.filter(message => message.sender == sender);
	},

	addMessage (message) {
		messages.push(message);
	},

	deleteMessage (id) {
		messages = messages.filter(message => message.id !== id);
	},

	updateMessage (id, text) {
		module.exports.findMessage(id).text = text;
	}
};