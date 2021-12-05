const express = require('express');
const Player = require('../src/Player');

const router = express.Router();


router.route(`/`)
	.post((req, res) => {
		let game = req.app.locals.game;
		let playerCount = game.getPlayers().length;
		res.status(200);
		if (playerCount === 1) {
			return res.redirect(307, '/results/singlePlayer');
		}
		return res.redirect(307, '/results/multiplayer');
	})

router.route(`/multiplayer`)
	.post((req, res) => {
		let game = req.app.locals.game;

		let player1 = game.getPlayers()[0];
		let player2 = game.getPlayers()[1];

		const result = game.determineWinner(player1, player2);

		res.status(200).json({ result });
	})

router.route(`/singlePlayer`)
	.post((req, res) => {
		let game = req.app.locals.game;

		let user = game.getPlayer()[0];

		let cpuData = game.computerChooses();
		let cpu = new Player(cpuData.name);
		cpu.setChoice(cpu.choice);

		const result = game.determineWinner(user, cpu);

		res.status(200).json({ result });
	})

module.exports = router;