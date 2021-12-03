const express = require('express');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		const game = req.app.locals.game;
		const players = game.getPlayers();

		const result = game.determineWinner(players[0], players[1]);

		console.log(result);

		res.status(200).json({ result });
	})

module.exports = router;