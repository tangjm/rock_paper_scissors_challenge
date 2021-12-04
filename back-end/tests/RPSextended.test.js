const RPSextended = require('../src/RPSextended');

// jest.spyOn(Player, 'getName', 'get').mockImplme
// jest.mock('../src/Player', () => {
// 	return 
// })
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

	describe(`Test suite for 'registerPlayers' method`, () => {
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


xdescribe(`Test suite for 'determineWinner' method`, () => {
	let testGame;
	let testPlayer1 = "testPlayer1";
	let testPlayer2 = "testPlayer2";
	beforeEach(() => {
		testGame = new RPSextended();
		testPlayer1 = "testPlayer1";
		testPlayer2 = "testPlayer2";
	})
	afterEach(() => {
		testGame = null;
		testPlayer1 = null;
		testPlayer2 = null;
	})

	test(`it should return "draw" if both players select the same choice`, () => {
		testGame.players = [
			{ name: testPlayer1, choice: "rock" },
			{ name: testPlayer2, choice: "rock" }];
		const result = testGame.determineWinner(testGame.players[0], testGame.players[1]);

		expect(result).toBe("draw");
	})
})