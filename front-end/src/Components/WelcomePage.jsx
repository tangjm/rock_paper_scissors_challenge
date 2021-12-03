import PropTypes from 'prop-types';

const WelcomePage = ({ player1Name, player2Name, setPlayer1Name, setPlayer2Name, submitPlayerNames }) => {

	const nameField = "Please input your name";
	const handleSubmitName = event => {
		event.preventDefault();
		submitPlayerNames(player1Name, player2Name);
		// setPlayer1Name(``);
		// setPlayer2Name(``);
	}
	return (
		<form onSubmit={handleSubmitName}>
			<label htmlFor="name"><h3>{nameField}</h3></label>
			<input
				className="App-link"
				id="name"
				value={player1Name}
				placeholder="Name"
				onChange={event => setPlayer1Name(event.target.value)}
				required
			/>&nbsp;
			<input
				className="App-link"
				id="name"
				value={player2Name}
				placeholder="Name"
				onChange={event => setPlayer2Name(event.target.value)}
				required
			/>&nbsp;
			<input type="submit" value="Submit" />
		</form>
	)
}

WelcomePage.propTypes = {
	playerName: PropTypes.string,
	player2Name: PropTypes.string,
	setPlayer1Name: PropTypes.func,
	setPlayer2Name: PropTypes.func,
	submitPlayerName: PropTypes.func,
}

export default WelcomePage;
