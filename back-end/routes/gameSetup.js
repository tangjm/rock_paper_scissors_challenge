const RPS = require('../src/RPS');
const RPSextended = require('../src/RPSextended');
const express = require('express');
const router = express.Router();

router.route(`/gameMode`)
	.post((req, res) => {
		res.status(200);
		return (
			req.body.gameMode === "singlePlayer" ? res.json({ gameType: "singlePlayer" })
				: res.json({ gameType: "multiplayer" })
		);
	});

router.route(`/gameType`)
	.post((req, res) => {
		res.status(200);
		if (req.body.gameType === "normal") {
			res.redirect(307, '/gameType/normal');
		}

		if (req.body.gameType === "special") {
			res.redirect(307, '/gameType/special');
		}
	})

router.route(`/gameType/normal`)
	.post((req, res) => {
		req.app.locals.game = new RPS();
		res.status(200);
		return res.json({ gameType: "normal" });
	});

router.route(`/gameType/special`)
	.post((req, res) => {
		req.app.locals.game = new RPSextended();
		res.status(200);
		return res.json({ gameType: "special" });
	});


module.exports = router;
