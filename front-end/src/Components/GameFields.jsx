import PropTypes from 'prop-types';

const GameFields = ({ playerName, submitData }) => {

	const optionsTitle = "Rock, Paper or Scissors?";
	const gameOptions = ["rock", "paper", "scissors", "spock", "lizard"];

	const submitChoicesHandler = event => {
		event.preventDefault();
		const chosenOption = document.querySelector("input[name='options']:checked").value;
		submitData(playerName, chosenOption);
	}

	return (
		<form onSubmit={submitChoicesHandler}>
			<h3>{playerName}'s turn to play</h3>
			<h3>{optionsTitle}</h3>
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
				<label htmlFor={gameOptions[3]}>{gameOptions[3]}</label>
				<input
					type="radio"
					id={gameOptions[3]}
					name="options"
					value={gameOptions[3]}
					required
				/>
				<label htmlFor={gameOptions[4]}>{gameOptions[4]}</label>
				<input
					type="radio"
					id={gameOptions[4]}
					name="options"
					value={gameOptions[4]}
					required
				/>
			</div>
			<input type="submit" className="App-link" value="Submit" />
		</form>
	)
}

GameFields.propTypes = {
	playerName: PropTypes.string,
	submitData: PropTypes.func,
}
export default GameFields;
