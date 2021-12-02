import PropTypes from 'prop-types';

const WelcomePage = ({ playerName, setPlayerName, submitPlayerName }) => {

	const nameField = "Please input your name";
	const handleSubmitName = event => {
		event.preventDefault();
		submitPlayerName(playerName);
		setPlayerName(``);
	}
	return (
		<form onSubmit={handleSubmitName}>
			<label htmlFor="name"><h3>{nameField}</h3></label>
			<input
				className="App-link"
				id="name"
				value={playerName}
				placeholder="Name"
				onChange={event => setPlayerName(event.target.value)}
				required
			/>&nbsp;
			<input type="submit" value="Submit" />
		</form>
	)
}

WelcomePage.propTypes = {
	playerName: PropTypes.string,
	setPlayerName: PropTypes.func,
	submitPlayerName: PropTypes.func
}

export default WelcomePage;
