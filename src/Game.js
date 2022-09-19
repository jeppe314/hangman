import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {
  function handleKeyClick(key) {
    if (props.game.guesses.includes(key)) {
      console.log("already clicked")
      return
    } else {
      props.setGame((prevState) => ({
        ...prevState,
        guesses: [...prevState.guesses, key],
        wrongGuesses: prevState.letters.includes(key)
          ? [...prevState.wrongGuesses]
          : [...prevState.wrongGuesses, key],
        correctGuesses: prevState.letters.includes(key)
          ? [...prevState.correctGuesses, key]
          : [...prevState.correctGuesses],
      }))
      checkWin()
      props.setGuessesLeft((prevGuesses) => prevGuesses - 1)
      console.log(props.game)
    }
  }

  function checkWin() {
    if (props.game.letters.every((letter) => props.game.correctGuesses.includes(letter))) {
      console.log("checkwin")
      winGame()
    } else return
  }

  function winGame() {
    console.log("WON")
    props.setHasWon(true)
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
      {props.hasWon && <h1>YOU WIN</h1>}
      {props.guessesLeft === 0 && <h1>GAME OVER</h1>}
    </div>
  )
}

//TODO:
// DISABLE MULTIPLE CLICKS ON SAME KEY = DONE
// MAKE THE WIN / LOSE MESSAGE SHOW UP NOT ONE CLICK LATE
// FIND A BETTER API
// UPDATE CSS
// FIND A SOLUTION TO THE INFINITE LOOP ON KEY PRESS...
