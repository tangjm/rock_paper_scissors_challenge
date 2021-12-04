const RPS = require('../src/RPS');

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
