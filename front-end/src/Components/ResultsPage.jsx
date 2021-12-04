import PropTypes from 'prop-types';

const ResultsPage = ({ gameResult, setGameResult, setRenderGameFields }) => {
	const pageContent = () => {
		if (gameResult === "draw") {
			return <h2>Not bad, a draw!</h2>
		}
		return <h2>Winner: {gameResult}</h2>
	}

	const gameFinishedHandler = event => {
		if (event.target.name === "newPlayers") {
			setRenderGameFields(false);
		}
		setGameResult({});
		// Reset player names
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
	setRenderGameFields: PropTypes.func
}

export default ResultsPage;
