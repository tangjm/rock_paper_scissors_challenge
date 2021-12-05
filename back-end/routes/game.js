const express = require('express');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {
			const { player, choice } = req.body;
			let game = req.app.locals.game;

			if (game.isRegistered(player)) {
				game.updatePlayerChoice(player, choice);
				return res.redirect(307, '/game/updated');
			}
			return res.status(400).json("POST failed: Player not registered");
		}

		return res.status(400).json("POST failed");
	})

router.route(`/updated`)
	.post((req, res) => {
		const { player } = req.body;
		let players = req.app.locals.game.getPlayers();
		if (players[players.length - 1].getName() === player) {
			return res.redirect(307, '/results');
		}
		return res.status(200).json(`${player}'s choice received successfully`);
	})

module.exports = router;