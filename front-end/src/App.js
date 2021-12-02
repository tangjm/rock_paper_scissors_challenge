import { useState, useEffect } from 'react';
import GameFields from './Components/GameFields';
import ResultsPage from './Components/ResultsPage';
import axios from 'axios';
import './App.css';

function App() {
  const [gameResult, setGameResult] = useState({});

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

  return (
    <div className="App-header">
      {
        (gameResult?.result) ? <ResultsPage gameResult={gameResult.result} setGameResult={setGameResult} /> :
          <GameFields setGameResult={setGameResult}
            submitData={submitData} />
      }
    </div >
  );
}

export default App;