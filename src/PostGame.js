import React from "react"

export default function PostGame(props) {
  console.log(props.game)
  console.log(props.guessesLeft)

  return (
    <div class="postGame-container">
      {props.guessesLeft <= 0 ? <h1>GAME OVER</h1> : <h1>YOU WIN</h1>}

      <div>
        <p>THE WORD WAS</p>
        <h1>{props.game.letters}</h1>
      </div>
      <button onClick={() => props.restartGame()}>PLAY AGAIN</button>
    </div>
  )
}
