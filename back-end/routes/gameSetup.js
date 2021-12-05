const express = require('express');
const RPS = require('../src/RPS');
const RPSextended = require('../src/RPSextended');
const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body?.gameMode) {
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
			req.body.gameType === "normal" ? res.json({ gameType: "normal" })
				: res.json({ gameType: "special" })
		);
	});

router.route(`/gameType`)
	.post((req, res) => {
		res.status(200);
		if (req.body.gameType === "normal") {
			req.app.locals.game = new RPS();
			return res.json({ gameType: "normal" });
		}

		if (req.body.gameType === "special") {
			req.app.locals.game = new RPSextended();
			return res.json({ gameType: "special" });
		}
	})

module.exports = router;
