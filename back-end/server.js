require('dotenv').config();
const express = require('express');
const startGame = require('./routes/userName');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();
app.use(`/`, startGame);

const server = app.listen(port, host, () => {
	const serverHost = server.address().address;
	const serverPort = server.address().port;
	console.log(`Listening at http://${serverHost}:${serverPort}/`);
});