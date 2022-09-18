import React from "react"
import Tile from "./Tile.js"

export default function Game(props) {
  const word = (
    <div className="word">
      {props.word.map((letter) => <Tile letter={letter} />)}
    </div>
  )

  return <div className="game-container">
    {word}
    </div>
}
