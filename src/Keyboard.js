import { nanoid } from "nanoid"
import React from "react"

export default function Keyboard(props) {
  const keyboardLetters = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ]

  document.addEventListener("keyup", (e) => handleKeyPress(e))

  function handleKeyPress(e) {
    props.handleClick(e.key.toUpperCase())
  }

  function handleClick(key) {
    props.handleClick(key)
  }

  const keyboardElements = keyboardLetters.map((letter) => {
    const styles = {
      opacity: props.game.guesses.includes(letter) ? "0.5" : "1",
    }

    return (
      <div className="key" key={nanoid()} style={styles} onClick={() => handleClick(letter)}>
        <h3>{letter}</h3>
      </div>
    )
  })

  return <div className="keyboard">{keyboardElements}</div>
}
