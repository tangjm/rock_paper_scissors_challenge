import PropTypes from 'prop-types';

const ResultsPage = ({ gameResult, setGameResult, setRenderGameFields, setPlayerTurn, setPlayer1Name, setPlayer2Name }) => {
	const pageContent = () => {
		if (gameResult === "draw") {
			return <h2>Not bad, a draw!</h2>
		}
		return <h2>Winner: {gameResult}</h2>
	}

	const gameFinishedHandler = event => {
		// The state of our states when the ResultsPage is rendered
		// playerTurn = 1;
		// player1Name = "name of player1";
		// player2Name = "name of player2";
		// gameResult = { result: "string" };
		// renderGameFields = true;

		if (event.target.name === "newPlayers") {
			// If there are new players
			setRenderGameFields(false);
			// Render WelcomePage
			// Reset player names
			setPlayer1Name(``);
			setPlayer2Name(``);
		}
		// Playing again with same players
		setGameResult({});
		// Render GameFields for player1 by setting playerTurn to 0
		setPlayerTurn(0);
	}

	return (
		<>
			{pageContent()}

			<input type="submit" name="playAgain" value="Play Again" onClick={gameFinishedHandler} />

			<input type="submit" name="newPlayers" value="New Players?" onClick={gameFinishedHandler} />
		</>
	)
}

ResultsPage.propTypes = {
	gameResult: PropTypes.string,
	setGameResult: PropTypes.func,
	setRenderGameFields: PropTypes.func,
	setPlayerTurn: PropTypes.func,
	setPlayer1Name: PropTypes.func,
	setPlayer2Name: PropTypes.func
}

export default ResultsPage;
