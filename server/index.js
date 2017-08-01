const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;
const db = require('./db/config');
const model = require('./db');
const router = require('./router');

app.use(express.static(path.join(__dirname, '../static')));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/nba', router);

app.listen(PORT, (err) => {
	if (err){
		console.log('Error connected to the server ', err);
	}else {
		console.log("Successfully connected to the server at PORT ", PORT);
	}
})