import "./App.css"
import { React, useState, useEffect } from "react"

import Game from "./Game.js"

function App() {
  const [gameState, setGameState] = useState(0)
  const [game, setGame] = useState({})
  const [numGuesses, setNumGuesses] = useState(7)

  function startGame() {
    fetch("https://api.api-ninjas.com/v1/randomword?type=noun")
      .then((res) => res.json())
      .then((data) =>
        setGame({
          letters: [...data.word.toUpperCase()],
          guesses: [],
          wrongLetters: [],
        })
      )
    setGameState(1)
  }

  

  const startPage = (
    <div className="start">
      <h1>HANGMAN</h1>
      <button onClick={() => startGame()}>Start game</button>
    </div>
  )

  const renderGame = <Game game={game} setGame={setGame} word={game.letters} />

  return (
    <div className="app">
      {gameState === 0 && startPage}
      {gameState === 1 && game.letters ? renderGame : ""}
    </div>
  )
}

export default App
