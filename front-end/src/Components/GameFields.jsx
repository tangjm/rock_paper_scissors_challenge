import { useState } from 'react';
import PropTypes from 'prop-types';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';

const GameFields = ({ playerName, submitData, toTitleCase }) => {
	const [radioValue, setRadioValue] = useState(``);

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
		// const chosenOption = document.querySelector("input[name='options']:checked").value;
		const chosenOption = radioValue;
		if (chosenOption) {

		}
		submitData(playerName, chosenOption);
	}

	const populateGameOptions = gameOptions => {
		return gameOptions.map((gameOption, index) => {
			gameOption = toTitleCase(gameOption);
			return (
				<ToggleButton key={index} id={gameOption} type="radio"
					variant={index % 2 ? 'outline-warning' : 'outline-info'}
					name="options" value={gameOption.toLowerCase()} required >
					{gameOption}
				</ToggleButton >
			);
		})
	}
	// const populateGameOptions = gameOptions => {
	// 	return gameOptions.map((gameOption, index) => {
	// 		gameOption = toTitleCase(gameOption);
	// 		return <div key={index}>
	// 			<label htmlFor={gameOption}>{gameOption}</label>
	// 			<input type="radio" id={gameOption} name="options"
	// 				value={gameOption.toLowerCase()} required />
	// 			&nbsp;&nbsp;&nbsp;
	// 		</div>
	// 	})
	// }

	const gameOptions = ["rock", "paper", "scissors", "spock", "lizard"];
	const optionsTitle = formatTitle(gameOptions);

	return (
		<form onSubmit={submitChoiceHandler}>
			<h1>{toTitleCase(playerName)}'s turn to play</h1>
			<p>{optionsTitle}</p>
			{/* {populateGameOptions(gameOptions)} */}
			<ToggleButtonGroup name="options" onChange={value => setRadioValue(value)} >
				{populateGameOptions(gameOptions)}
			</ToggleButtonGroup>
			{/* <input type="submit" className="App-link" value="Submit" /> */}
			&nbsp;&nbsp;
			<Button as="input" type="submit" value="Submit"
				variant="primary" size="lg" />
		</form>
	)
}

GameFields.propTypes = {
	playerName: PropTypes.string,
	submitData: PropTypes.func,
	toTitleCase: PropTypes.func
}

export default GameFields;
