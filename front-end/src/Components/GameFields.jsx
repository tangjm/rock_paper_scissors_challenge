import PropTypes from 'prop-types';

const GameFields = ({ playerName, submitData }) => {

	const optionField = "Rock, Paper or Scissors?";
	const gameOptions = ["rock", "paper", "scissors"];

	const submitChoicesHandler = event => {
		event.preventDefault();
		const chosenOption = document.querySelector("input[name='options']:checked").value;
		submitData(playerName, chosenOption);
	}

	return (
		<form onSubmit={submitChoicesHandler}>
			<h3>{optionField}</h3>
			<div display="flex" flex-direction="column">
				<label htmlFor={gameOptions[0]}>{gameOptions[0]}</label>
				<input
					type="radio"
					id={gameOptions[0]}
					name="options"
					value={gameOptions[0]}
					required
				/>
				<label htmlFor={gameOptions[1]}>{gameOptions[1]}</label>
				<input
					type="radio"
					id={gameOptions[1]}
					name="options"
					value={gameOptions[1]}
					required
				/>
				<label htmlFor={gameOptions[2]}>{gameOptions[2]}</label>
				<input
					type="radio"
					id={gameOptions[2]}
					name="options"
					value={gameOptions[2]}
					required
				/>
			</div>
			<input type="submit" className="App-link" value="Submit" />
		</form>
	)
}

GameFields.propTypes = {
	playerName: PropTypes.string,
	submitData: PropTypes.func
}
export default GameFields;
