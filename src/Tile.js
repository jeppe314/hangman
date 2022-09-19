import React from "react"


export default function Tile(props) {
  return (
    <div className="tile">
      <p
        className={
          props.game.letters.includes(props.letter) &&
          props.game.guesses.includes(props.letter)
            ? `letter ${props.letter} `
            : `letter ${props.letter} no-show `
        }
      >
        {props.letter}
      </p>
    </div>
  )
}
