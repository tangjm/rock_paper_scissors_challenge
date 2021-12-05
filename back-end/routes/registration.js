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
				return res.redirect(307, '/registration/singlePlayer')
			} else {
				return res.redirect(307, '/registration/multiplayer')
			}
		}
		return res.status(404).send("Failed to register player(s)");
	})

router.route(`/singlePlayer`)
	.post((req, res) => {
		const { playerName } = req.body;
		const rpsGame = new RPS();
		rpsGame.registerPlayers(playerName);
		req.app.locals.game = rpsGame;

		return res.status(200).json("Sucessfully registered player");
	})

router.route(`/multiplayer`)
	.post((req, res) => {
		const { player1Name, player2Name } = req.body;
		const rpsGame = new RPSextended();
		rpsGame.registerPlayers(player1Name, player2Name);
		req.app.locals.game = rpsGame;

		return res.status(200).json("Sucessfully registered players");
	})


module.exports = router;
