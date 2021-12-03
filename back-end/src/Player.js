class Player {
	constructor(name) {
		this.name = name;
		this.choice = null;
	}

	setChoice(choice) {
		this.choice = choice;
	}

	getChoice() {
		return this.choice;
	}
}

module.exports = Player;