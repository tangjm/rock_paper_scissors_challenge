require('dotenv').config();
const express = require('express');
const cors = require('cors');
const registrationRouter = require('./routes/registration');
const gameRouter = require('./routes/game');
const resultsRouter = require('./routes/results');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(cors());
app.use(express.json());


app.use(`/`, registrationRouter);
app.use(`/game`, gameRouter);
app.use(`/results`, resultsRouter);

const server = app.listen(port, host, () => {
	const serverHost = server.address().address;
	const serverPort = server.address().port;
	console.log(`NodeServer: Listening at http://${serverHost}:${serverPort}/`);
});