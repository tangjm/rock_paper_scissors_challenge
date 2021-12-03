class RPS {
	constructor() {
		this.options = ["rock", "paper", "scissors"];
	}

	computerChooses() {
		const randomNum = Math.round(Math.random() * 2);
		const cpuChoice = options[randomNum];
		return { name: "CPU", choice: cpuChoice };
	}

	determineWinner(a, b) {
		aChoice = this.options.indexOf(a.choice);
		bChoice = this.options.indexOf(b.choice);

		if (aChoice === bChoice) return "draw";
		else if ((aChoice + 1) % 3 === bchoice) return a.name;
		else return b.name;
	}
}

module.exports = RPS;

