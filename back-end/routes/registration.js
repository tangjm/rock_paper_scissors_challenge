const express = require('express');
const RPSextended = require('../src/RPSextended');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body) {
			const { player1Name, player2Name } = req.body;

			const rpcGame = new RPSextended();
			rpcGame.registerPlayers(player1Name, player2Name);

			req.app.locals.game = rpcGame;

			return res.status(200).json("Sucessfully registered players");
		}
		return res.status(404).send("Failed to register players");
	})


module.exports = router;
