import React from "react"
import Tile from "./Tile.js"
import Keyboard from "./Keyboard.js"

export default function Game(props) {
  const word = (
    <div className="word">
      {props.word.map((letter) => <Tile letter={letter} />)}
    </div>
  )

  return <div className="game-container">
    {word}
    <Keyboard />
    </div>
}
