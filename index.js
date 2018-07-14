const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/routes.js')(app);
 	
const server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
