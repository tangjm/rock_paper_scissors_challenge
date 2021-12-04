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
	// Do the following  in the RPSextended class
	//check whether the player has registered,
	// if so, update their choice;
	// if not, error?
	updatePlayerChoice(player, choice) {
		let registered = this.players.some(registeredPlayer => registeredPlayer.getName() === player);
		if (registered) {
			this.players.forEach(currentPlayer => {
				if (currentPlayer.getName() === player) {
					currentPlayer.setChoice(choice);
				}
			})
		}
	}

	determineWinner(a, b) {
		const aChoice = this.options.indexOf(a.getChoice()) + 1;
		const bChoice = this.options.indexOf(b.getChoice()) + 1;
		// Modular division with negative integers is abnormal in javascript
		// e.g. -3 mod 5 = 2 yet -3 % 5 === -3
		// If x is negative, mod(x, y) needs to be mod(mod(x, y) + y), y) to give the correct answer
		// Calculation for determining if x wins: 
		// mod(mod(x - y, 5), 2)) === 1
		if (aChoice === bChoice) {
			return "draw";
		}
		if (((((aChoice - bChoice) % 5) + 5) % 5) % 2 === 1) {
			return a.name;
		}
		return b.name;
	}
}

module.exports = RPSextended;