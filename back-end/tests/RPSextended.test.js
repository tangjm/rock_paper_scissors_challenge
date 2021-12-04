const RPSextended = require('../src/RPSextended');
const Player = require('../src/Player');

// jest.spyOn(Player, 'getName', 'get').mockImplme
// class MockPlayer {

// }

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



// jest.spyOn()

describe(`Test suite for 'determineWinner' method`, () => {
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
