import "./App.css"
import { React, useState } from "react"

function App() {
  const [gameState, setGameState] = useState(0)
  const [game, setGame] = useState({})

  function startGame() {
    fetch("https://api.api-ninjas.com/v1/randomword?type=noun")
      .then((res) => res.json())
      .then((data) => setGame(
        {
          letters: [...data.word.toUpperCase()],
          guessedLetters: [],
          wrongLetters: [],
        }
      ))
      console.log(game)
      setGameState(1)
  }

  const startPage = (
    <div className="start">
      <h1>HANGMAN</h1>
      <button onClick={() => startGame()}>Start game</button>
    </div>
  )

  return <div className="app">{gameState === 0 && startPage}</div>
}

export default App
