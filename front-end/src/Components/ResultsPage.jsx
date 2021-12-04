import PropTypes from 'prop-types';

const ResultsPage = ({ gameResult, setGameResult, setRenderGameFields, setPlayerTurn, setPlayer1Name, setPlayer2Name, toTitleCase }) => {
	const pageContent = () => {
		if (gameResult === "draw") {
			return <h1>Not bad, a draw!</h1>
		}
		return <h1>Winner: {toTitleCase(gameResult)}</h1>
	}

	const gameFinishedHandler = event => {
		if (event.target.name === "newPlayers") {
			setRenderGameFields(false);
			setPlayer1Name(``);
			setPlayer2Name(``);
		}
		setGameResult({});
		setPlayerTurn(0);
	}

	return (
		<>
			{pageContent()}
			<input variant="primary" type="submit" name="playAgain" value="Play Again" onClick={gameFinishedHandler} />
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
