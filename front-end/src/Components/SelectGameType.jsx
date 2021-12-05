import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const SelectGameType = ({ sendGameType, setRenderGameTypes }) => {

	const clickHandler = event => {
		if (event.target.value === "Normal") {
			sendGameType("normal");
		} else {
			sendGameType("special");
		}
		setRenderGameTypes(false);
	}
	return (
		<div>
			<h1>Select Game Version</h1>
			<Button as="input" type="submit" value="Normal"
				variant="primary" size="lg"
				onClick={clickHandler} />
			<Button as="input" type="submit" value="Special"
				variant="primary" size="lg"
				onClick={clickHandler} />
		</div>
	)
}

SelectGameType.propTypes = {
	sendGameType: PropTypes.func,
	setRenderGameTypes: PropTypes.func,
}
export default SelectGameType;
