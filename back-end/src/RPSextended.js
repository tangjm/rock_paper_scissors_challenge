// const Player = require('./Player.js');
const RPS = require('./RPS');

class RPSextended extends RPS {
	constructor() {
		super();
		this.setOptions();
	}

	setOptions() {
		this.options.push("spock", "lizard");
	}

	determineWinner(a, b) {
		const aChoice = this.options.indexOf(a.getChoice()) + 1;
		const bChoice = this.options.indexOf(b.getChoice()) + 1;

		if (aChoice === bChoice) {
			return "draw";
		}
		if (((((aChoice - bChoice) % 5) + 5) % 5) % 2 === 1) {
			return a.getName();
		}
		return b.getName();
	}
}

module.exports = RPSextended;