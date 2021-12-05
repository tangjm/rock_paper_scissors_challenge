const express = require('express');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body?.playerCount) {
			res.status(200);
			return req.body.playerCount ? res.json({ gameMode: "singlePlayer" }) :
				res.json({ gameMode: "multiplayer" });
		}

		if (req.body?.gameType) {
			res.status(200);
			return req.body.gameType === "normal" ? res.json({ gameType: "normal" }) : res.json({ gameType: "special" });
		}
	})

module.exports = router;

// router.route(`/singlePlayer`)
// 	// select either normal or special game mode
// 	.post((req, res) => {
// 		res.json()
// 	})
