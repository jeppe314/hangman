import "./App.css"
import { React, useState, useEffect } from "react"

import Game from "./Game.js"

function App() {
  const [gameState, setGameState] = useState(0)
  const [guessesLeft, setGuessesLeft] = useState(20)
  const [hasWon, setHasWon] = useState(false)
  const [game, setGame] = useState({
    letters: [],
    guesses: [],
    wrongGuesses: [],
    correctGuesses: [],
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

  // function winGame() {
  //   console.log("WON")
  //   setHasWon(true)
  // }

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
      // winGame={() => winGame()}
      hasWon={hasWon}
      setHasWon={setHasWon}
      word={game.letters}
    />
  )

  return (
    <div className="app">
      {gameState === 0 && startPage}
      {gameState === 1 && renderGame}
    </div>
  )
}

export default App
