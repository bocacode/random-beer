import React, {useState, useEffect } from 'react'
import './App.css'

function App() {
  const [beers, setBeers] = useState(null)
  const [randomBeer, setRandomBeer] = useState(null)
  useEffect(() => {
    fetch('https://beers-api-bc.web.app/beers')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(err => console.log(err))
  }, [])
  const getRandom = () => {
    const elem = Math.floor(Math.random()*beers.length)
    setRandomBeer(beers[elem].name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Beers</h1>
        <button onClick={() => getRandom()}>Pick a Beer</button>
        {randomBeer && <h2>{randomBeer}<hr /></h2>}
        {!beers ? <h2>Loading...</h2> : 
          beers.map(beer => {
            return <p key={beer.id}>{beer.name}</p>
          })
        }
      </header>
    </div>
  )
}

export default App
