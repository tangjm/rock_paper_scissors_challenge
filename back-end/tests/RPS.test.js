const RPS = require('../src/RPS');

describe(`Test suite for RPS`, () => {
	describe(`Tests for constructor`, () => {

		test(`it should initialise an empty options array and then populate it so that it has length 3`, () => {
			const game = new RPS();
			const actualValue = game.options;
			const expectedValue = 3;
			expect(actualValue).toHaveLength(expectedValue);
		})

		test(`it should create an options array that contains "rock", "paper" and "scissors"`, () => {
			const game = new RPS();
			const actualValue = game.options;
			const expectedValue = "rock";
			expect(actualValue).toContain(expectedValue);
		})
	})
})
