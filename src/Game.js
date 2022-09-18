import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {
  document.addEventListener("keyup", handleKeyPress, true)

  function handleKeyPress(e) {
    handleKeyClick(e.key.toUpperCase())
  }

  function handleKeyClick(key) {
    console.log(key)
    console.log(props.game.letters)
    props.setGame((prevState) => ({
      ...prevState,
      guesses: [...prevState.guesses, key],
    }))
    console.log(props.game)
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
      <Keyboard key={nanoid()} game={props.game} handleClick={(key) => handleKeyClick(key)} />
    </div>
  )
}
