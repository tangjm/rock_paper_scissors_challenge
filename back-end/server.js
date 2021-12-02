require('dotenv').config();
const express = require('express');
const cors = require('cors');
const startGame = require('./routes/userName');
const determineWinner = require('./routes/userSubmitted');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(cors());
app.use(express.json());

app.use(`/finalised`, determineWinner);
app.use(`/`, startGame);

const server = app.listen(port, host, () => {
	const serverHost = server.address().address;
	const serverPort = server.address().port;
	console.log(`NodeServer: Listening at http://${serverHost}:${serverPort}/`);
});