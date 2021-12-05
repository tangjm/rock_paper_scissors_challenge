const Player = require('./Player.js');

class RPS {
	constructor() {
		this.options = ["rock", "paper", "scissors"];
	}

	getPlayers() {
		return this.players;
	}

	isRegistered(player) {
		return this.players.some(registeredPlayer => registeredPlayer.getName() === player);
	}

	updatePlayerChoice(player, choice) {
		this.players.forEach(currentPlayer => {
			if (currentPlayer.getName() === player) {
				currentPlayer.setChoice(choice);
			}
		})
	}

	registerPlayers(...players) {
		this.players = [...players].map(player => new Player(player));
	}

	computerChooses() {
		const randomNum = Math.round(Math.random() * 2);
		const cpuChoice = options[randomNum];
		return { name: "CPU", choice: cpuChoice };
	}

	determineWinner(a, b) {
		const aChoice = this.options.indexOf(a.getChoice());
		const bChoice = this.options.indexOf(b.getChoice());

		if (aChoice === bChoice) return "draw";
		else if ((aChoice + 1) % 3 === bChoice) return a.getName();
		else return b.getName();
	}
}

module.exports = RPS;

