const express = require('express');
const RPS = require('../src/RPS');
const RPSextended = require('../src/RPSextended');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {
			//if req.body contains a single key
			// then, redirect to th

			const singlePlayerGame = Object.keys(req.body).length === 1;

			if (singlePlayerGame) {
				return res.redirect(307, '/registration/singlePlayer');
			} else {
				return res.redirect(307, '/registration/multiplayer');
			}
		}
		return res.status(404).send("Failed to register player(s)");
	})

router.route(`/singlePlayer`)
	.post((req, res) => {
		const { player1Name } = req.body;

		let game = req.app.locals.game;
		game.registerPlayers(player1Name);

		return res.status(200).json("Sucessfully registered player");
	})

router.route(`/multiplayer`)
	.post((req, res) => {
		const { player1Name, player2Name } = req.body;

		let game = req.app.locals.game;
		game.registerPlayers(player1Name, player2Name);

		return res.status(200).json("Sucessfully registered players");
	})


module.exports = router;
