import PropTypes from 'prop-types';

const GameFields = ({ playerName, submitData }) => {

	const formatTitle = gameOptionsArr => {
		let formattedTitle = "";
		gameOptionsArr = gameOptionsArr.map(gameOption => toTitleCase(gameOption));
		for (let i = 0; i < gameOptionsArr.length; i++) {
			(i !== gameOptionsArr.length - 1) ? formattedTitle += `, ${gameOptionsArr[i]}` :
				formattedTitle += ` or ${gameOptionsArr[i]}?`;
		}
		return formattedTitle.slice(1);
	}

	const submitChoiceHandler = event => {
		event.preventDefault();
		const chosenOption = document.querySelector("input[name='options']:checked").value;
		submitData(playerName, chosenOption);
	}

	const toTitleCase = string => {
		return string[0].toUpperCase().concat(string.slice(1));
	}

	const populateGameOptions = gameOptions => {
		return gameOptions.map((gameOption, index) => {
			gameOption = toTitleCase(gameOption);
			return <div key={index}>
				<label htmlFor={gameOption}>{gameOption}</label>
				<input type="radio" id={gameOption} name="options"
					value={gameOption.toLowerCase()} required />
				&nbsp;&nbsp;&nbsp;
			</div>
		})
	}

	const gameOptions = ["rock", "paper", "scissors", "spock", "lizard"];
	const optionsTitle = formatTitle(gameOptions);

	return (
		<form onSubmit={submitChoiceHandler}>
			<h1>{toTitleCase(playerName)}'s turn to play</h1>
			<p>{optionsTitle}</p>
			{populateGameOptions(gameOptions)}
			<input type="submit" className="App-link" value="Submit" />
		</form>
	)
}

GameFields.propTypes = {
	playerName: PropTypes.string,
	submitData: PropTypes.func,
}

export default GameFields;
