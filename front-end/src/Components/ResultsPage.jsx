import PropTypes from 'prop-types';

const ResultsPage = ({ gameResult, setGameResult }) => {
	const pageContent = () => {
		if (gameResult === "draw") {
			return <h2>Not bad, a draw!</h2>
		}
		return <h2>Winner: {gameResult}</h2>
	}

	return (
		<>
			{pageContent()}
			<input type="submit" value="Play Again" onClick={event => setGameResult({})} />
		</>
	)
}

ResultsPage.propTypes = {
	gameResult: PropTypes.string,
	setGameResult: PropTypes.func
}

export default ResultsPage;
