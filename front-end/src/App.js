import { useState } from 'react';
import axios from 'axios';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WelcomePage from './Components/WelcomePage';
import GameFields from './Components/GameFields';
import ResultsPage from './Components/ResultsPage';

function App() {
  const [gameType, setGameType] = useState("normal");
  const [singlePlayer, setSinglePlayer] = useState(false);
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
      if (res.data && singlePlayer) {
        return setGameResult(res.data);
      }
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

  const submitPlayerNames = async playerNamesObj => {
    try {
      const res = await axios.post(`${nodeServer}/registration`, { ...playerNamesObj });
      if (res.data) {
        setRenderGameFields(true);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const sendGameMode = async gameMode => {
    try {
      await axios.post(`${nodeServer}/gameMode`, { gameMode });
    } catch (e) {
      console.log(e);
    }
  }

  const sendGameType = async gameType => {
    try {
      const res = await axios.post(`${nodeServer}/gameType`, { gameType });
      if (res.data?.gameType) {
        console.log(res.data.gameType);
        setGameType(res.data.gameType);
      }
    } catch (e) {
      console.log(e);
    }
  }

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
            <GameFields playerName={!playerTurn ? player1Name : player2Name} submitData={submitData} toTitleCase={toTitleCase} gameType={gameType} />
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
        submitPlayerNames={submitPlayerNames}
        sendGameMode={sendGameMode}
        sendGameType={sendGameType}
        singlePlayer={singlePlayer}
        setSinglePlayer={setSinglePlayer} />
    </div >
  );
}

export default App;