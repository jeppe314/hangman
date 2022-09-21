import "./App.css"
import { React, useState, useEffect } from "react"
import Game from "./Game.js"
import PostGame from "./PostGame.js"
import image from "./images/hangman_figure.png"
import axios from "axios"

function App() {
  const [gameState, setGameState] = useState(0)
  const [guessesLeft, setGuessesLeft] = useState(10)
  const [hasWon, setHasWon] = useState(false)
  const [game, setGame] = useState({
    letters: [],
    guesses: [],
    wrongGuesses: [],
    correctGuesses: [],
  })

  const options = {
    method: "GET",
    url: "https://random-word-generator2.p.rapidapi.com/word.php",
    params: { generator: "words", api_key: "5w36eV0FZJu9QIPlpR18" },
    headers: {
      "X-RapidAPI-Key": "2af4fb3cf9msh1cc550c484ebe41p1ae561jsne8bb383f0a16",
      "X-RapidAPI-Host": "random-word-generator2.p.rapidapi.com",
    },
  }

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGame({
          guesses: [],
          wrongGuesses: [],
          correctGuesses: [],
          letters: [...response.data.word.toUpperCase()],
        })
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [hasWon])

  function startGame() {
    setGameState(1)
  }

  function restartGame() {
    setGame(prevState => ({
      ...prevState,
      correctGuesses: [],
      guesses: []
    }))
    setHasWon(!hasWon)
    setGameState(1)
    setGuessesLeft(10)
  }

  const startPage = (
    <div className="start-container">
      <h1>HANGMAN</h1>
      <img src={image} alt="Stick figure hangman" className="hangman-image" />
      <button onClick={() => startGame()}>Start game</button>
    </div>
  )

  const renderGame = (
    <Game
      game={game}
      setGame={setGame}
      guessesLeft={guessesLeft}
      setGuessesLeft={setGuessesLeft}
      hasWon={hasWon}
      setHasWon={setHasWon}
      setGameState={setGameState}
      gameState={gameState}
      word={game.letters}
    />
  )

  return (
    <div className="app">
      {gameState === 0 && startPage}
      {gameState === 1 && renderGame}
      {gameState === 2 && (
        <PostGame game={game} guessesLeft={guessesLeft} restartGame={() => restartGame()} />
      )}
    </div>
  )
}

export default App
