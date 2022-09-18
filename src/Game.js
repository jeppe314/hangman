import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"
import { nanoid } from "nanoid"

export default function Game(props) {
  function handleKeyClick(key) {
    console.log(key)
    console.log(props.game.letters)
    props.setGame(prevState => (
      {
        ...prevState,
        guesses: [...prevState.guesses, key]
      }
    ))
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
      <Keyboard handleClick={(key) => handleKeyClick(key)} key={nanoid()} game={props.game} />
    </div>
  )
}
