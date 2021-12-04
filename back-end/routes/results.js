const express = require('express');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		let game = req.app.locals.game;
		let player1 = game.getPlayers()[0];
		let player2 = game.getPlayers()[1];

		const result = game.determineWinner(player1, player2);

		res.status(200).json({ result });
	})

module.exports = router;