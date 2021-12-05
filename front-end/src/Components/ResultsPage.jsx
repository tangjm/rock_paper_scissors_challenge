import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const ResultsPage = ({ gameResult, setGameResult, setRenderGameFields, setPlayerTurn, setPlayer1Name, setPlayer2Name, toTitleCase }) => {
	const pageContent = () => {
		console.log(typeof gameResult)
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
		<div>
			{pageContent()}
			&nbsp;
			<Stack direction="horizontal" gap={3}>
				<Button
					as="input"
					type="submit"
					value="Play Again!"
					variant="primary"
					name="playAgain"
					size="lg"
					onClick={gameFinishedHandler}
				/>
				<Button
					as="input"
					type="submit"
					value="New Game?"
					variant="warning"
					name="newPlayers"
					size="lg"
					onClick={gameFinishedHandler}
				/>
			</Stack>
		</div>
	)
}

ResultsPage.propTypes = {
	gameResult: PropTypes.string,
	setGameResult: PropTypes.func,
	setRenderGameFields: PropTypes.func,
	setPlayerTurn: PropTypes.func,
	setPlayer1Name: PropTypes.func,
	setPlayer2Name: PropTypes.func,
	toTitleCase: PropTypes.func
}

export default ResultsPage;
