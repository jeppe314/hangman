import "./App.css"
import { React, useState, useEffect } from "react"

import Game from "./Game.js"

function App() {
  const [gameState, setGameState] = useState(0)
  const [guessesLeft, setGuessesLeft] = useState(10)
  const [game, setGame] = useState({
    letters: [],
    guesses: [],
    wrongLetters: [],
  })

  function startGame() {
    fetch("https://api.api-ninjas.com/v1/randomword?type=noun")
      .then((res) => res.json())
      .then((data) =>
        setGame((prevState) => ({
          ...prevState,
          letters: [...data.word.toUpperCase()],
        }))
      )
    setGameState(1)
  }

  const startPage = (
    <div className="start">
      <h1>HANGMAN</h1>
      <button onClick={() => startGame()}>Start game</button>
    </div>
  )

  const renderGame = (
    <Game
      game={game}
      setGame={setGame}
      guessesLeft={guessesLeft}
      setGuessesLeft={setGuessesLeft}
      word={game.letters}
    />
  )

  return (
    <div className="app">
      {gameState === 0 && startPage}
      {gameState === 1 && game.letters ? renderGame : ""}
    </div>
  )
}

export default App
