import PropTypes from 'prop-types';

const WelcomePage = ({ player1Name, player2Name, setPlayer1Name, setPlayer2Name, submitPlayerNames }) => {

	const nameField = "Please register your names";
	const handleSubmitName = event => {
		event.preventDefault();
		submitPlayerNames(player1Name, player2Name);
	}

	return (
		<>
			<h1>Welcome!</h1>
			<form onSubmit={handleSubmitName}>
				<label htmlFor="name"><h3>{nameField}</h3></label>
				<p>Player 1</p>
				<input
					className="App-link"
					id="name"
					value={player1Name}
					placeholder="Player 1"
					onChange={event => setPlayer1Name(event.target.value)}
					required
				/>&nbsp;
				<p>Player 2</p>
				<input
					className="App-link"
					id="name"
					value={player2Name}
					placeholder="Player 2"
					onChange={event => setPlayer2Name(event.target.value)}
					required
				/>&nbsp;
				<input type="submit" value="Submit" />
			</form>
		</>
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
