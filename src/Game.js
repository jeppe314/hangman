import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {

  function handleKeyClick(key) {
    props.setGame((prevState) => ({
      ...prevState,
      guesses: [...prevState.guesses, key],
      wrongGuesses: prevState.letters.includes(key) ? [...prevState.wrongGuesses] : [...prevState.wrongGuesses, key],
      correctGuesses: prevState.letters.includes(key) ? [...prevState.correctGuesses, key] : [...prevState.correctGuesses]
    }))
    checkWin()
    props.setGuessesLeft(prevGuesses => (prevGuesses - 1))
    console.log(props.game)
  }

  function checkWin() {
      if(props.game.letters.every(letter => props.game.correctGuesses.includes(letter))) {
        props.winGame()
    } else return
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
      <h3>{props.guessesLeft}</h3>
      {word}
      {!props.hasWon && (
        <Keyboard key={nanoid()} game={props.game} handleClick={(key) => handleKeyClick(key)} />
      )}
      {props.hasWon === true && <h1>YOU WIN</h1>}
      {props.guessesLeft === 0 && <h1>GAME OVER</h1>}
    </div>
  )
}
