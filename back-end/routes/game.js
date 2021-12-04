const express = require('express');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {
			const { player, choice } = req.body;
			let game = req.app.locals.game;
			let players = game.getPlayers();

			if (game.isRegistered(player)) {
				game.updatePlayerChoice(player, choice);
			} else {
				return res.status(400).json("POST failed: Player not registered");
			}

			if (players[players.length - 1].getName() === player) {
				return res.redirect(307, '/results');
			}

			return res.status(200).json(`${player}'s choice received successfully`);
		}

		return res.status(400).json("POST failed");
	})


module.exports = router;