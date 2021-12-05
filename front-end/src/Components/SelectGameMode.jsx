import React from 'react'
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const SelectGameMode = ({ sendGameMode, setRenderGameModes }) => {
	const clickHandler = event => {
		if (event.target.id === "singlePlayer") {
			sendGameMode("singlePlayer");
		} else {
			sendGameMode("multiplayer");
		}
		setRenderGameModes(false);
	}
	return (
		<div>
			<h1>Single Player or Multiplayer?</h1>
			<Button as="input" type="submit" id="singlePlayer" value="Single Player"
				variant="primary" size="lg"
				onClick={clickHandler} />
			<Button as="input" type="submit" id="multiplayer" value="Multiplayer"
				variant="primary" size="lg"
				onClick={clickHandler} />
		</div>
	)
}

SelectGameMode.propTypes = {
	sendGameMode: PropTypes.func,
	setRenderGameModes: PropTypes.func,
}
export default SelectGameMode;
