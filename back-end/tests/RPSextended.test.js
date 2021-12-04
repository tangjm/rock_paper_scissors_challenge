const RPSextended = require('../src/RPSextended');

class MockPlayer {
	constructor(name) {
		this.name = name;
	}

	setChoice(choice) {
		this.choice = choice;
	}

	getChoice() {
		return this.choice;
	}

	getName() {
		return this.name;
	}
}

describe(`Test suite for RPSextended class`, () => {
	describe(`Tests for constructor`, () => {
		let testGame;
		beforeEach(() => {
			testGame = new RPSextended();

		})
		afterEach(() => {
			testGame = null;
		})

		test(`it should have an options property detailing all available player options`, () => {
			const testOptions = testGame.options;

			expect(testOptions[0]).toBe("rock");
			expect(testOptions[1]).toBe("paper");
			expect(testOptions[2]).toBe("scissors");
			expect(testOptions[3]).toBe("spock");
			expect(testOptions[4]).toBe("lizard");
		})

		test(`it should have an options property with length 5`, () => {
			expect(testGame.options.length).toBe(5);
		})
	})

	describe(`Tests for 'registerPlayers' method`, () => {
		let testGame;
		beforeEach(() => {
			testGame = new RPSextended();

		})
		afterEach(() => {
			testGame = null;
		})
		test(`registerPlayers method should produce an array of length n given n arguments`, () => {
			const testPlayer1 = "testPlayer1";
			const testPlayer2 = "testPlayer2";

			testGame.registerPlayers(testPlayer1, testPlayer2);

			expect(testGame.getPlayers().length).toBe(2);
		})

		test(`registerPlayers method should create an array of Players`, () => {
			const testPlayer1 = "testPlayer1";
			const testPlayer2 = "testPlayer2";

			testGame.registerPlayers(testPlayer1, testPlayer2);

			expect(testGame.getPlayers()[0]).toEqual({ name: testPlayer1 });
			expect(testGame.getPlayers()[1]).toEqual({ name: testPlayer2 });
		})
	})

	describe(`Tests for 'isRegistered' method`, () => {
		let testGame;
		beforeEach(() => {
			testGame = new RPSextended();
		})
		afterEach(() => {
			testGame = null;
		})
		test(`it should return true if player is registered`, () => {
			const testPlayer = "testPlayer";
			testGame.players = [new MockPlayer(testPlayer)];
			const actualValue = testGame.isRegistered(testPlayer);
			expect(actualValue).toBe(true);
		})

		test(`it should return false if player is not registered`, () => {
			const testPlayer = "testPlayer";
			const testPlayer2 = "testPlayer2";
			testGame.players = [new MockPlayer(testPlayer2)];
			const actualValue = testGame.isRegistered(testPlayer);
			expect(actualValue).toBe(false);
		})
	})

	describe(`Tests for 'updatePlayerChoice' method`, () => {
		let testGame;
		beforeEach(() => {
			testGame = new RPSextended();
		})
		afterEach(() => {
			testGame = null;
		})
		test(`it should add a choice property to the existing Player if they are registered`, () => {
			const testPlayer = "testPlayer";
			const testChoice = "rock";
			testGame.players = [new MockPlayer(testPlayer)];

			testGame.updatePlayerChoice(testPlayer, testChoice);
			const actualValue = testGame.players[0];

			expect(actualValue).toHaveProperty("choice", testChoice);
		})

		test(`it should do nothing if player is not registered`, () => {
			const testPlayer = "testPlayer";
			const testPlayer2 = "testPlayer2";
			const testChoice = "rock";
			testGame.players = [new MockPlayer(testPlayer2)];

			testGame.updatePlayerChoice(testPlayer, testChoice);
			const actualValue = testGame.players[0];

			expect(actualValue).not.toHaveProperty("choice");
		})
	})

	describe(`Test suite for 'determineWinner' method`, () => {
		describe(`Tests for draws`, () => {
			let testGame;
			let testPlayer1;
			let testPlayer2;
			beforeEach(() => {
				testGame = new RPSextended();
				testPlayer1 = new MockPlayer("testPlayer1");
				testPlayer2 = new MockPlayer("testPlayer2");
			})
			afterEach(() => {
				testGame = null;
				testPlayer1 = null;
				testPlayer2 = null;
			})

			test(`it should return "draw" if both players select "rock"`, () => {
				testPlayer1.setChoice("rock");
				testPlayer2.setChoice("rock");
				testGame.players = [testPlayer1, testPlayer2];
				const result = testGame.determineWinner(testGame.players[0], testGame.players[1]);

				expect(result).toBe("draw");
			})

			test(`it should return "draw" if both players select "paper"`, () => {
				testPlayer1.setChoice("paper");
				testPlayer2.setChoice("paper");
				testGame.players = [testPlayer1, testPlayer2];
				const result = testGame.determineWinner(testGame.players[0], testGame.players[1]);

				expect(result).toBe("draw");
			})

			test(`it should return "draw" if both players select "scissors"`, () => {
				testPlayer1.setChoice("scissors");
				testPlayer2.setChoice("scissors");
				testGame.players = [testPlayer1, testPlayer2];
				const result = testGame.determineWinner(testGame.players[0], testGame.players[1]);

				expect(result).toBe("draw");
			})

			test(`it should return "draw" if both players select "spock"`, () => {
				testPlayer1.setChoice("spock");
				testPlayer2.setChoice("spock");
				testGame.players = [testPlayer1, testPlayer2];
				const result = testGame.determineWinner(testGame.players[0], testGame.players[1]);

				expect(result).toBe("draw");
			})

			test(`it should return "draw" if both players select "lizard"`, () => {
				testPlayer1.setChoice("lizard");
				testPlayer2.setChoice("lizard");
				testGame.players = [testPlayer1, testPlayer2];
				const result = testGame.determineWinner(testGame.players[0], testGame.players[1]);

				expect(result).toBe("draw");
			})
		})

		describe(`Tests for "rock"`, () => {
			let testGame;
			let testPlayer1;
			let testPlayer2;
			beforeEach(() => {
				testGame = new RPSextended();
				testPlayer1 = new MockPlayer("testPlayer1");
				testPlayer2 = new MockPlayer("testPlayer2");
			})
			afterEach(() => {
				testGame = null;
				testPlayer1 = null;
				testPlayer2 = null;
			})

			test(`it should beat "scissors"`, () => {
				testPlayer1.setChoice("rock");
				testPlayer2.setChoice("scissors");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})

			test(`it should beat "lizard"`, () => {
				testPlayer1.setChoice("rock");
				testPlayer2.setChoice("lizard");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})
		})

		describe(`Tests for "paper"`, () => {
			let testGame;
			let testPlayer1;
			let testPlayer2;
			beforeEach(() => {
				testGame = new RPSextended();
				testPlayer1 = new MockPlayer("testPlayer1");
				testPlayer2 = new MockPlayer("testPlayer2");
			})
			afterEach(() => {
				testGame = null;
				testPlayer1 = null;
				testPlayer2 = null;
			})

			test(`it should beat "rock"`, () => {
				testPlayer1.setChoice("paper");
				testPlayer2.setChoice("rock");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})

			test(`it should beat "spock"`, () => {
				testPlayer1.setChoice("paper");
				testPlayer2.setChoice("spock");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})
		})

		describe(`Tests for "scissors"`, () => {
			let testGame;
			let testPlayer1;
			let testPlayer2;
			beforeEach(() => {
				testGame = new RPSextended();
				testPlayer1 = new MockPlayer("testPlayer1");
				testPlayer2 = new MockPlayer("testPlayer2");
			})
			afterEach(() => {
				testGame = null;
				testPlayer1 = null;
				testPlayer2 = null;
			})

			test(`it should beat "paper"`, () => {
				testPlayer1.setChoice("scissors");
				testPlayer2.setChoice("paper");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})

			test(`it should beat "lizard"`, () => {
				testPlayer1.setChoice("scissors");
				testPlayer2.setChoice("lizard");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})
		})

		describe(`Tests for "spock"`, () => {
			let testGame;
			let testPlayer1;
			let testPlayer2;
			beforeEach(() => {
				testGame = new RPSextended();
				testPlayer1 = new MockPlayer("testPlayer1");
				testPlayer2 = new MockPlayer("testPlayer2");
			})
			afterEach(() => {
				testGame = null;
				testPlayer1 = null;
				testPlayer2 = null;
			})

			test(`it should beat "rock"`, () => {
				testPlayer1.setChoice("spock");
				testPlayer2.setChoice("rock");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})

			test(`it should beat "scissors"`, () => {
				testPlayer1.setChoice("spock");
				testPlayer2.setChoice("scissors");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})
		})

		describe(`Tests for "lizard"`, () => {
			let testGame;
			let testPlayer1;
			let testPlayer2;
			beforeEach(() => {
				testGame = new RPSextended();
				testPlayer1 = new MockPlayer("testPlayer1");
				testPlayer2 = new MockPlayer("testPlayer2");
			})
			afterEach(() => {
				testGame = null;
				testPlayer1 = null;
				testPlayer2 = null;
			})

			test(`it should beat "paper"`, () => {
				testPlayer1.setChoice("lizard");
				testPlayer2.setChoice("paper");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})

			test(`it should beat "spock"`, () => {
				testPlayer1.setChoice("lizard");
				testPlayer2.setChoice("spock");
				testGame.players = [testPlayer1, testPlayer2];

				const actualWinner = testGame.determineWinner(testGame.players[0], testGame.players[1]);
				const expectedWinner = "testPlayer1";

				expect(actualWinner).toBe(expectedWinner);
			})
		})
	})
})




