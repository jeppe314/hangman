import React from "react"

export default function Keyboard() {
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

  const keyboardElements = keyboardLetters.map((letter) => {
    return <div className="key">
      <h3>{letter}</h3>
    </div>
  })

  return <div className="keyboard">{keyboardElements}</div>
}
