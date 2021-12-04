const Player = require('../src/Player');

describe(`Test suite for Player class`, () => {

	test(`it instantiates with a name property`, () => {
		const testName = "testPlayer";
		const testPlayer = new Player(testName);
		expect(testPlayer.getName()).toBe(testName);
	})

	test(`it should have a 'choice' property set when setChoice is called`, () => {
		const testName = "testPlayer";
		const testPlayer = new Player(testName);
		const testChoice = "testChoice";

		testPlayer.setChoice(testChoice);

		expect(testPlayer.getChoice()).toBe(testChoice);
	})
})