const RPSextended = require('../src/RPSextended');

const MockPlayer = {
	name: "testtPlayer",
}

describe(`Test suite for RPSextended class`, () => {

	test(`it should have an options property detailing all available player options`, () => {
		const testGame = new RPSextended();
		const testOptions = testGame.options;

		expect(testOptions[0]).toBe("rock");
		expect(testOptions[1]).toBe("paper");
		expect(testOptions[2]).toBe("scissors");
		expect(testOptions[3]).toBe("spock");
		expect(testOptions[4]).toBe("lizard");
	})

	test(`it should have an options property with length 5`, () => {
		const testGame = new RPSextended();
		expect(testGame.options.length).toBe(5);
	})

	xtest(`it should`, () => {

	})
})
