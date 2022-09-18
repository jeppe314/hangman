import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {


  
  document.addEventListener("keyup", (e) => handleKeyPress(e))

  function handleKeyPress(e) {
    handleKeyClick(e.key.toUpperCase())
    console.log(props.game)
  }

  function handleKeyClick(key) {
    props.setGame((prevState) => ({
      ...prevState,
      guesses: [...prevState.guesses, key],
      wrongLetters: prevState.letters.includes(key) ? [...prevState.wrongLetters] : [...prevState.wrongLetters, key]
    }))
    props.setGuessesLeft(prevGuesses => (prevGuesses - 1))
  }

  const word = (
    <div className="word">
      {props.word.map((letter) => (
        <Tile key={nanoid()} letter={letter} game={props.game} />
      ))}
    </div>
  )

  return (
    <div className="game-container">
      {word}
      {props.guessesLeft > 0 && <Keyboard key={nanoid()} game={props.game} handleClick={(key) => handleKeyClick(key)} />}
      {props.guessesLeft <= 0 && <h1>GAME OVER</h1>}
    </div>
  )
}
