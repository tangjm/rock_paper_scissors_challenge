const express = require('express');

const router = express.Router();

router.route(`/`)
	.post((req, res) => {
		if (req.body?.playerCount) {
			res.status(200);
			req.body.playerCount ? res.json({ gameMode: "singlePlayer" }) :
				res.json({ gameMode: "multiplayer" });
		}
	})

module.exports = router;

// router.route(`/singlePlayer`)
// 	// select either normal or special game mode
// 	.post((req, res) => {
// 		res.json()
// 	})
