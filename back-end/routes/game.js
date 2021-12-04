const express = require('express');
const Player = require('../src/Player');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {

			const { player, choice } = req.body;
			console.log(req.body);
			// let game = req.app.get("game");

			// let players = game.getPlayers();
			// for (let i = 0; i < players.length; i++) {
			// 	if (players[i].name == player) {
			// 		players[i].setChoice(choice);
			// 	}
			// }

			// Do the following  in the RPSextended class
			//check whether the player has registered,
			// if so, update their choice;
			// if not, error?

			// Do the following in the express route
			// check whether that player is the second/last player,
			// if so, redirect to /results
			// if not, send a response object verifying their selection
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