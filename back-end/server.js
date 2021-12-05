require('dotenv').config();
const express = require('express');
const cors = require('cors');

const gameSetupRouter = require('./routes/gameSetup');
const registrationRouter = require('./routes/registration');
const gameRouter = require('./routes/game');
const resultsRouter = require('./routes/results');

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(cors());
app.use(express.json());

app.use(`/`, gameSetupRouter);
app.use(`/registration`, registrationRouter);
app.use(`/game`, gameRouter);
app.use(`/results`, resultsRouter);

const server = app.listen(port, host, () => {
	const serverHost = server.address().address;
	const serverPort = server.address().port;
	console.log(`NodeServer: Listening at http://${serverHost}:${serverPort}/`);
});

// Registration route
// if singlePlayer button is clicked,
// send a {playerCount: 1}
// check if req.body.playerCount is true
// if so, redirect to the /singlePlayer route
// if not, redirect to the /multiPlayer route

// SelectGame route
// The next page that renders should be
// a GameChoicePage 
//  if user selects 'normal', send an object to the server {gameType: "normal"}
// if req.body?.gameType is true, then
// render the GameFields with 3 options
// otherwise, render GameFields with 5 options

// Game route
// The next page that renders should be the GameFields page
// if the game is single player, 
// redirect to the /results route immediately
// We check this by checking the number of players registered at this point in time
// else, wait for the second POST request before redirecting to the /results route

// Results route
// Determine the winner 
// Send back a response that tells React 
// to render the ResultsPage
// with two buttons
// 1. Play again - Returns to GameFieldsPage
// 2. New Game - returns to WelcomePage
