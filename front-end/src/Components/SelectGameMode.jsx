import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const SelectGameMode = ({ sendGameMode, setRenderGameModes, setSinglePlayer }) => {
	const clickHandler = event => {
		if (event.target.id === "singlePlayer") {
			setSinglePlayer(true);
			sendGameMode("singlePlayer");
		} else {
			setSinglePlayer(false);
			sendGameMode("multiplayer");
		}
		setRenderGameModes(false);
	}
	return (
		<div>
			<h1>Select Game Mode</h1>
			&nbsp;
			<Stack direction="vertical" gap={3}>
				<Button as="input" type="submit" id="singlePlayer"
					value="Single Player" variant="success" size="lg"
					onClick={clickHandler} />
				<Button as="input" type="submit" id="multiplayer"
					value="Multiplayer" variant="danger" size="lg"
					onClick={clickHandler} />
			</Stack>
		</div>
	)
}

SelectGameMode.propTypes = {
	sendGameMode: PropTypes.func,
	setRenderGameModes: PropTypes.func,
	setSinglePlayer: PropTypes.func,
}
export default SelectGameMode;
