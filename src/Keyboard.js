import { nanoid } from "nanoid"
import React, { useEffect } from "react"

export default function Keyboard(props) {
  const keyboardLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]

  //Eventlistener, finally preventing infinite loop. Not sure how.
  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress)
    return () => {
      document.removeEventListener("keyup", handleKeyPress)
    }
  })

  function handleKeyPress(e) {
    console.log("KEY PRESSED")
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      props.handleClick(e.key.toUpperCase())
  }}

  function handleClick(key) {
    props.handleClick(key)
  }

  const keyboardElements = keyboardLetters.map((letter) => {
    const styles = {
      opacity: props.game.guesses.includes(letter) ? "0.5" : "1",
    }

    return (
      <div className="key" key={nanoid()} style={styles} onClick={() => handleClick(letter)}>
        <h2>{letter}</h2>
      </div>
    )
  })

  return <div className="keyboard">{keyboardElements}</div>
}
