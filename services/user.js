class User {
	constructor(id, name) {
		this.id = id;
		this.name = name;
	}
}

let users = [];

module.exports = {
	allUsers () {
		return users;
	},

	newUser (data) {
		return new User(Date.now(), data.name);
	},

	findUser (id) {
		return users.find(user => user.id == id);
	},

	addUser (user) {
		users.push(user);
	},

	deleteUser (id) {
		users = users.filter(user => user.id !== id);
	},

	updateUser (id, name) {
		module.exports.findUser(id).name = name;
	}
};