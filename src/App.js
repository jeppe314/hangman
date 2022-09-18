import "./App.css"
import { React, useState } from "react"
import Start from "./Start.js"

function App() {
  const [gameState, setGameState] = useState(0)

  return <div className="app">{gameState === 0 && <Start />}</div>
}

export default App
