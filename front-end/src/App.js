import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [playerName, setPlayerName] = useState(``);

  const [displayResult, setDisplayResult] = useState(false);

  const nameField = "Please input your name";
  const optionField = "Rock, Paper or Scissors?";
  const possibleOptions = ["rock", "paper", "scissors"];

  const nodeServer = process.env.REACT_APP_NODE_SERVER;

  const submitHandler = event => {
    event.preventDefault();
    const chosenOption = document.querySelector("input[name='options']:checked").value;
    submitData(playerName, chosenOption);
    setPlayerName(``);
  }

  const submitData = async (playerName, chosenOption) => {
    try {
      const res = await axios.post(
        `${nodeServer}/finalised`,
        { name: playerName, choice: chosenOption }
      );
      // return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App-header">
      <form onSubmit={submitHandler}>
        <div>
          <h3>{nameField}</h3>
          <label htmlFor="name">{nameField}</label>
          <input
            className="App-link"
            id="name"
            value={playerName}
            placeholder="Name"
            onChange={event => setPlayerName(event.target.value)}
            required
          />
        </div>
        <h3>{optionField}</h3>
        <div>
          <input
            type="radio"
            id={possibleOptions[0]}
            name="options"
            value={possibleOptions[0]}
            required
          />
          <label htmlFor={possibleOptions[0]}>{possibleOptions[0]}</label>

          <input
            type="radio"
            id={possibleOptions[1]}
            name="options"
            value={possibleOptions[1]}
            required
          />
          <label htmlFor={possibleOptions[1]}>{possibleOptions[1]}</label>

          <input
            type="radio"
            id={possibleOptions[2]}
            name="options"
            value={possibleOptions[2]}
            required
          />
          <label htmlFor={possibleOptions[2]}>{possibleOptions[2]}</label>
        </div>

        <input type="submit" className="App-link" value="Submit" />
      </form>
    </div >
  );
}

export default App;