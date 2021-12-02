import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import WelcomePage from './Components/WelcomePage';
import GameFields from './Components/GameFields';
import ResultsPage from './Components/ResultsPage';

function App() {
  const [playerName, setPlayerName] = useState(``);
  const [gameResult, setGameResult] = useState({});
  const [renderGameFields, setRenderGameFields] = useState(false);

  const nodeServer = process.env.REACT_APP_NODE_SERVER;

  const submitData = async (playerName, chosenOption) => {
    try {
      const res = await axios.post(
        `${nodeServer}/finalised`,
        { name: playerName, choice: chosenOption }
      );
      setGameResult(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const submitPlayerName = async playerName => {
    try {
      const res = await axios.post(`${nodeServer}/`, { name: playerName });
      // no need to set playerName as we set it before making the POST request
      // then render the GamesFields page
      if (res.data?.playerName) {
        setRenderGameFields(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (renderGameFields) {
    return (
      <div className="App-header">
        {
          gameResult?.result ? <ResultsPage gameResult={gameResult.result} setGameResult={setGameResult} setRenderGameFields={setRenderGameFields} /> :
            <GameFields playerName={playerName} setGameResult={setGameResult}
              submitData={submitData} />
        }
      </div >
    )
  }

  return (
    <div className="App-header">
      <WelcomePage playerName={playerName} setPlayerName={setPlayerName} submitPlayerName={submitPlayerName} />
    </div >
  );
}

export default App;