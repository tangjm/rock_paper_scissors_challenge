import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const nameField = "Please input your name";
  const optionField = "Rock, Paper or Scissors?";
  const availableOptions = ["Rock", "Paper", "Scissors"];

  const port = 
  const submitHandler = event => {
    event.preventDefault();
    axios.post(``)

  };

  return (
    <div className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <h3>{nameField}</h3>
      <input className="App-link" required />
      <h3>{optionField}</h3>

      <form onClick={submitHandler}>
        <div>
          <input type="radio" id={availableOptions[0]} name="options" value={availableOptions[0]} required />
          <label for={availableOptions[0]}>{availableOptions[0]}</label>
        </div>
        <div>
          <input type="radio" id={availableOptions[1]} name="options" value={availableOptions[1]} required />
          <label for={availableOptions[1]}>{availableOptions[1]}</label>
        </div>
        <div>
          <input type="radio" id={availableOptions[2]} name="options" value={availableOptions[2]} required />
          <label for={availableOptions[2]}>{availableOptions[2]}</label>
        </div>

        <input type="submit" className="App-link" value="submit" />

      </form>
    </div >
  );
}

export default App;