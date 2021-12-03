const express = require('express');
const Player = require('../src/Player');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {
			const { player, choice } = req.body;

			const game = req.app.locals.data.game;

			const index = game.getPlayers().indexOf(player);
			// if (index !== -1) {
			// }
			const players = game.getPlayers();
			console.log(players)
			const playerToUpdate = players[index];
			console.log(playerToUpdate);
			console.log(playerToUpdate.name);
			// playerToUpdate.set

			// new Player(player,);




			if (index === game.getPlayers().length - 1) {
				return res
					.status(200)
					.json(`${player}'s choice received successfully`)
					.redirect(307, '/results');
			}

			return res.status(200).json(`${player}'s choice received successfully`);
		}

		return res.status(400).json("POST failed");
	})


module.exports = router;