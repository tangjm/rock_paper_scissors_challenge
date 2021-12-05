const RPS = require('../src/RPS');

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

describe(`Test suite for RPS`, () => {
	describe(`Tests for constructor`, () => {
		test(`it should initialise an options array that has length 3`, () => {
			const game = new RPS();
			const actualValue = game.options;
			const expectedValue = 3;
			expect(actualValue).toHaveLength(expectedValue);
		})

		test(`it should create an options array that contains "rock"`, () => {
			const game = new RPS();
			const actualValue = game.options;
			const expectedValue = "rock";
			expect(actualValue).toContain(expectedValue);
		})

		test(`it should create an options array that contains "paper"`, () => {
			const game = new RPS();
			const actualValue = game.options;
			const expectedValue = "paper";
			expect(actualValue).toContain(expectedValue);
		})

		test(`it should create an options array that contains "scissors"`, () => {
			const game = new RPS();
			const actualValue = game.options;
			const expectedValue = "scissors";
			expect(actualValue).toContain(expectedValue);
		})

		test(`"rock" should be at index 0`, () => {
			const game = new RPS();
			const actualValue = game.options[0];
			const expectedValue = "rock";
			expect(actualValue).toBe(expectedValue);
		})

		test(`"paper" should be at index 1`, () => {
			const game = new RPS();
			const actualValue = game.options[1];
			const expectedValue = "paper";
			expect(actualValue).toBe(expectedValue);
		})

		test(`"scissors" should be at index 2`, () => {
			const game = new RPS();
			const actualValue = game.options[2];
			const expectedValue = "scissors";
			expect(actualValue).toBe(expectedValue);
		})
	})
})

describe(`Test suite for 'determineWinner' method`, () => {
	describe(`Tests for draws`, () => {
		let testGame;
		let testPlayer1;
		let testPlayer2;
		beforeEach(() => {
			testGame = new RPS();
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
	})

	describe(`Tests for "rock"`, () => {
		let testGame;
		let testPlayer1;
		let testPlayer2;
		beforeEach(() => {
			testGame = new RPS();
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
	})

	describe(`Tests for "paper"`, () => {
		let testGame;
		let testPlayer1;
		let testPlayer2;
		beforeEach(() => {
			testGame = new RPS();
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
	})

	describe(`Tests for "scissors"`, () => {
		let testGame;
		let testPlayer1;
		let testPlayer2;
		beforeEach(() => {
			testGame = new RPS();
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
	})
})