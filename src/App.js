import React, {useState, useEffect} from 'react';
import './App.css';
import StarWarsDisplay from './components/StarWarsDisplay.js'

function App() {
  const [starWarsData, setStarWarsData] = useState({})

  const makeApiCall = async () => {
    const starWarsUrl = 'https://swapi.dev/api/starships/'

    const res = await fetch(starWarsUrl);
    const json = await res.json();

    setStarWarsData(json)
  }

  useEffect(() => {
    makeApiCall('star wars')
  }, [])

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <StarWarsDisplay swdata={starWarsData}/>
    </div>
  );
}

export default App;
