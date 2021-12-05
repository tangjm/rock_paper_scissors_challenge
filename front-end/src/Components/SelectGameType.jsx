import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

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
			<h1>Welcome! </h1>
			<p>
				Would you like to play Rock, Paper, Scissors or a close variant?
			</p>
			<Stack className="mt-3" direction="horizontal" gap={3}>
				<Button as="input" type="submit" value="Normal"
					variant="success" size="lg"
					onClick={clickHandler} />
				<Button as="input" type="submit" value="Variant"
					variant="danger" size="lg"
					onClick={clickHandler} />
			</Stack>
		</div>
	)
}

SelectGameType.propTypes = {
	sendGameType: PropTypes.func,
	setRenderGameTypes: PropTypes.func,
}
export default SelectGameType;
