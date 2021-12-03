const express = require('express');
const Player = require('../src/Player');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {

			const { player, choice } = req.body;
			// let game = req.app.get("game");

			// let players = game.getPlayers();
			// for (let i = 0; i < players.length; i++) {
			// 	if (players[i].name == player) {
			// 		players[i].setChoice(choice);
			// 	}
			// }

			let game = req.app.locals.game;
			let players = game.getPlayers();
			for (let i = 0; i < players.length; i++) {
				if (players[i].name === player && i === players.length - 1) {
					players[i].setChoice(choice);
					return res.redirect(307, '/results');
				}
				if (players[i].name === player && i !== players.length - 1) {
					players[i].setChoice(choice);
				}
			}

			return res.status(200).json(`${player}'s choice received successfully`);
		}

		return res.status(400).json("POST failed");
	})


module.exports = router;