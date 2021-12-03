const Player = require('./Player.js');
const RPS = require('./RPS');

class RPSextended extends RPS {
	constructor() {
		super();
		this.setOptions();
	}

	setOptions() {
		this.options.push("spock", "lizard");
	}

	registerPlayers(...players) {
		this.players = [...players].map(player => new Player(player));
	}

	getPlayers() {
		return this.players;
	}

	updatePlayerChoice(player, choice) {
		const index = this.players.indexOf(player);
		const playerArr = this.getPlayers();
		const playerToEdit = playerArr[index];
		playerToEdit.setChoice(choice);
		return playerToEdit.getChoice();
	}

	determineWinner(a, b) {
		const aChoice = this.options.indexOf(a.getChoice()) + 1;
		const bChoice = this.options.indexOf(b.getChoice()) + 1;

		if (aChoice === bChoice) {
			return "draw";
		} else if (aChoice < bChoice && ((aChoice - bChoice) % 5) % 2 === 1) {
			return a.name;
		} else if (aChoice > bChoice && (aChoice - bChoice) % 2 === 1) {
			return a.name;
		} else {
			return b.name;
		}
	}
}

module.exports = RPSextended;