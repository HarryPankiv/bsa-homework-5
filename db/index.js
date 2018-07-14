const mongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
mongoClient.connect(url, function(err, client){
 	
 	const db = client.db("bsaDB");
 	const users = db.collection("users");
 	const messages = db.collection("messages");
    if(err){
        return console.log(err);
    }

    client.close();
});

module.exports = db;