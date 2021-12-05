import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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
				<h3 className="mb-4 mt-4">{nameField}</h3>
				<InputGroup className="mb-3 mt-2" >
					<InputGroup.Text id="basic-addon2">Player 1</InputGroup.Text>
					<FormControl
						placeholder="Player Name"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						value={player1Name}
						onChange={event => setPlayer1Name(event.target.value)}
						required
					/>
				</InputGroup>
				<InputGroup className="mb-4" >
					<InputGroup.Text id="basic-addon2">Player 2</InputGroup.Text>
					<FormControl
						placeholder="Player Name"
						aria-label="Recipient's username"
						aria-describedby="basic-addon2"
						value={player2Name}
						onChange={event => setPlayer2Name(event.target.value)}
						required
					/>
				</InputGroup>
				<Button as="input" type="submit" value="Submit"
					variant="primary" size="lg" />
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
