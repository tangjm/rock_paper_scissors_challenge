import { useState } from 'react';
import axios from 'axios';
import './App.css';

import WelcomePage from './Components/WelcomePage';
import GameFields from './Components/GameFields';
import ResultsPage from './Components/ResultsPage';

function App() {
  const [playerTurn, setPlayerTurn] = useState(0);
  const [player1Name, setPlayer1Name] = useState(``);
  const [player2Name, setPlayer2Name] = useState(``);
  const [gameResult, setGameResult] = useState({});
  const [renderGameFields, setRenderGameFields] = useState(false);

  const nodeServer = process.env.REACT_APP_NODE_SERVER;

  const submitData = async (playerName, chosenOption) => {
    try {
      const res = await axios.post(
        `${nodeServer}/game`,
        { player: playerName, choice: chosenOption }
      );
      if (res.data && playerTurn) {
        setGameResult(res.data);
      }
      if (res.data && !playerTurn) {
        setPlayerTurn(1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const submitPlayerNames = async (player1Name, player2Name) => {
    try {
      const res = await axios.post(`${nodeServer}/`, {
        player1Name,
        player2Name
      });
      if (res.data) {
        setRenderGameFields(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toTitleCase = string => {
    return string[0].toUpperCase().concat(string.slice(1));
  }

  if (renderGameFields) {
    return (
      <div className="App-header">
        {
          gameResult?.result ?
            <ResultsPage gameResult={gameResult.result}
              setGameResult={setGameResult}
              setRenderGameFields={setRenderGameFields}
              setPlayerTurn={setPlayerTurn}
              setPlayer1Name={setPlayer1Name}
              setPlayer2Name={setPlayer2Name}
              toTitleCase={toTitleCase} /> :
            <GameFields playerName={!playerTurn ? player1Name : player2Name} submitData={submitData} toTitleCase={toTitleCase} />
        }
      </div >
    )
  }

  return (
    <div className="App-header">
      <WelcomePage player1Name={player1Name}
        player2Name={player2Name}
        setPlayer1Name={setPlayer1Name}
        setPlayer2Name={setPlayer2Name}
        submitPlayerNames={submitPlayerNames} />
    </div >
  );
}

export default App;