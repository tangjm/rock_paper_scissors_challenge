const express = require('express');

const router = express.Router();

function computerChooses() {
	const options = ["rock", "paper", "scissors"];
	const randomNum = Math.round(Math.random() * 2);
	const cpuChoice = options[randomNum];
	return { name: "CPU", choice: cpuChoice };
}

function determineWinner(a, b) {
	({ name: aName, choice: aChoice } = a);
	({ name: bName, choice: bChoice } = b);

	if (aChoice === bChoice) return "draw";
	else if (aChoice === "rock" && bChoice === "scissors") return aName;
	else if (aChoice === "scissors" && bChoice === "paper") return aName;
	else if (aChoice === "paper" && bChoice === "rock") return aName;
	else return bName;
}

router.route(`/`)
	.post((req, res) => {
		const userData = req.body;
		const result = determineWinner(computerChooses(), userData);
		console.log(result);
		res.json({ result: result });
	})


module.exports = router;