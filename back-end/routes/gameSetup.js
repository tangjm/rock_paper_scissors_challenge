const express = require('express');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body?.playerCount) {
			return res.redirect(307, '/gameMode');
		}

		if (req.body?.gameType) {
			return res.redirect(307, '/gameType');
		}
	})

router.route(`/gameMode`)
	.post((req, res) => {
		res.status(200);
		return (
			req.body.playerCount ? res.json({ gameMode: "singlePlayer" }) :
				res.json({ gameMode: "multiplayer" })
		);
	});

router.route(`/gameType`)
	.post((req, res) => {
		res.status(200);
		return (
			req.body.gameType === "normal" ? res.json({ gameType: "normal" })
				: res.json({ gameType: "special" })
		);
	})

module.exports = router;
