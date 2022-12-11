import React, {useState, useEffect} from 'react';
import './App.css';
import StarWarsDisplay from './components/StarWarsDisplay.js'

function App() {
  const [starWarsData, setStarWarsData] = useState(null)

  const makeApiCall = async () => {
    const starWarsUrl = 'https://swapi.dev/api/starships/'

    const res = await fetch(starWarsUrl);
    const json = await res.json();

    setStarWarsData(json)
  }

  useEffect(() => {
    makeApiCall()
  }, [])

  const starships = starWarsData?.results.map((ele, index) => {
    return <StarWarsDisplay {...ele} key={index}/>
  }) 

  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      {starships}
    </div>
  );
}

export default App;
