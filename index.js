const express = require('express');
const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Credentials", true)
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")
//     next();
// });

const routes = require('./routes/routes.js')(app);

const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});