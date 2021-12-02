const express = require('express');

const router = express.Router();

function computerChooses() {
	const options = ["Rock", "Paper", "Scissors"];
	const randomNum = Math.round(Math.random() * 2);
	const cpuChoice = options[randomNum];
	return cpuChoice;
}

function determineWinner(a, b) {
	const aWins = `${a} wins`;
	const bWins = `${b} wins`;
	const outcome = "";

	if (a === b) outcome = "draw";
	else if (a === "rock" && b === "scissors") outcome = aWins;
	else if (a === "scissors" && b === "paper") outcome = aWins;
	else if (a === "paper" && b === "rock") outcome = aWins;
	else outcome = bWins;

	return outcome;
}

router.route(`/`)
	.post((req, res) => {
		console.dir(req.body);
		const userSelections = req.body;
		res.end("Welcome");
	})


module.exports = router;