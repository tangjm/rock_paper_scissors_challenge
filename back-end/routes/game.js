const express = require('express');
const Player = require('../src/Player');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {

			const { player, choice } = req.body;
			console.log(req.body);

			// Do the following in the express route
			// check whether that player is the second/last player,
			// if so, redirect to /results
			// if not, send a response object verifying their selection
			let game = req.app.locals.game;
			let players = game.getPlayers();

			game.updatePlayerChoice(player, choice);

			if (players[players.length - 1].getName() === player) {
				return res.redirect(307, '/results');
			}
			// for (let i = 0; i < players.length; i++) {
			// 	if (players[i].name === player && i === players.length - 1) {
			// 		players[i].setChoice(choice);
			// 		return res.redirect(307, '/results');
			// 	}
			// 	if (players[i].name === player && i !== players.length - 1) {
			// 		players[i].setChoice(choice);
			// 	}
			// }

			return res.status(200).json(`${player}'s choice received successfully`);
		}

		return res.status(400).json("POST failed");
	})


module.exports = router;