import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {
  function handleKeyClick(key) {
    //Makes sure same key isnt pressed multiple times
    if (props.game.guesses.includes(key)) {
      console.log("already clicked")
      return
    } else {
      //Otherwise updates state
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

      //Checks if user has won (still doesnt update immediately, only after one more letter click)
      if (props.game.letters.every((letter) => props.game.correctGuesses.includes(letter))) {
        props.setHasWon(true)
        props.setGameState(2)
        console.log("YOU WIN")
        console.log(props.hasWon)
      } else {
        props.setGuessesLeft((prevGuesses) => prevGuesses - 1)
        if (props.guessesLeft === 0) {
          props.setGameState(2)
        } else return
      }
    }
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
      <h3>Guesses left: {props.guessesLeft}</h3>
      <div>
        {word}
        {!props.hasWon && (
          <Keyboard key={nanoid()} game={props.game} handleClick={(key) => handleKeyClick(key)} />
        )}
      </div>
    </div>
  )
}

//TODO:
// DONE // DISABLE MULTIPLE CLICKS ON SAME KEY
// TILES SHOULDNT GENERATE NEW KEY EVERY RERENDER
// MAKE ALL TILES APPEAR IN ONE ROW, NOT TWO WHEN THERE ARE LONG WORDS
// MAKE THE WIN / LOSE MESSAGE SHOW UP NOT ONE CLICK LATE
// FIND A BETTER API
// MOSTLY DONE // UPDATE CSS
// DONE // FIND A SOLUTION TO THE INFINITE LOOP ON KEY PRESS...
// DONE // ADD PLAY AGAIN BUTTON
