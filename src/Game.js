import { React, useEffect } from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {
  const { game, setGameState, guessesLeft, setHasWon } = props

  // RUNS EFFECT EVERY TIME A GUESS IS MADE
  useEffect(() => {
    console.log("effect")
    if (game.letters.every((letter) => game.correctGuesses.includes(letter))) {
      setTimeout(() => setGameState(2), 1000)
      // setHasWon(true) ??
    } else if (guessesLeft === 0) {
      setGameState(2)
    }
  }, [game.guesses])

  function handleKeyClick(key) {
    //Makes sure same key isnt pressed multiple times
    if (props.game.guesses.includes(key)) {
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
      // IF THE GUESSED LETTER IS CORRECT, DO NOTHING
      if (props.game.letters.includes(key)) {
        return
      }
      // IF ITS WRONG, SUBTRACT ONE GUESS
      else {
        props.setGuessesLeft((prevGuesses) => prevGuesses - 1)
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
        <Keyboard key={nanoid()} game={props.game} handleClick={(key) => handleKeyClick(key)} />
      </div>
    </div>
  )
}

//TODO:
// DONE // DISABLE MULTIPLE CLICKS ON SAME KEY
// TILES SHOULDNT GENERATE NEW KEY EVERY RERENDER
// DONE // MAKE ALL TILES APPEAR IN ONE ROW, NOT TWO WHEN THERE ARE LONG WORDS
// MAKE THE WIN / LOSE MESSAGE SHOW UP NOT ONE CLICK LATE
// DONE // FIND A BETTER API
// DONE // UPDATE CSS
// DONE // UPDATED GAME LOGIC TO NOT REDUCE GUESSES LEFT AFTER CORRECT GUESS
// DONE // FIND A SOLUTION TO THE INFINITE LOOP ON KEY PRESS...
// DONE // ADD PLAY AGAIN BUTTON
