import { useState } from 'react';
import PropTypes from 'prop-types';

const GameFields = ({ setGameResult, submitData }) => {
	const [playerName, setPlayerName] = useState(``);

	const nameField = "Please input your name";
	const optionField = "Rock, Paper or Scissors?";
	const possibleOptions = ["rock", "paper", "scissors"];

	const submitHandler = event => {
		event.preventDefault();
		const chosenOption = document.querySelector("input[name='options']:checked").value;
		setGameResult(submitData(playerName, chosenOption));
		setPlayerName(``);
	}

	return (
		<form onSubmit={submitHandler}>
			<div>
				<h3>{nameField}</h3>
				<label htmlFor="name">{nameField}</label>
				<input
					className="App-link"
					id="name"
					value={playerName}
					placeholder="Name"
					onChange={event => setPlayerName(event.target.value)}
					required
				/>
			</div>
			<h3>{optionField}</h3>
			<div>
				<input
					type="radio"
					id={possibleOptions[0]}
					name="options"
					value={possibleOptions[0]}
					required
				/>
				<label htmlFor={possibleOptions[0]}>{possibleOptions[0]}</label>

				<input
					type="radio"
					id={possibleOptions[1]}
					name="options"
					value={possibleOptions[1]}
					required
				/>
				<label htmlFor={possibleOptions[1]}>{possibleOptions[1]}</label>

				<input
					type="radio"
					id={possibleOptions[2]}
					name="options"
					value={possibleOptions[2]}
					required
				/>
				<label htmlFor={possibleOptions[2]}>{possibleOptions[2]}</label>
			</div>
			<div>
				<input type="submit" className="App-link" value="Submit" />
			</div>
		</form>
	)
}

GameFields.propTypes = {
	setGameResult: PropTypes.func,
	submitData: PropTypes.func
}
export default GameFields;
