import React from "react"
import "./App.css"

import Clothes from "./components/Clothes"
import Shoes from "./components/Shoes"
import Accessories from "./components/Accessories"

function App() {
  return (
    <div className="App">
      <Clothes/>
      <Shoes/>
      <Accessories/>
    </div>
  )
}

export default App
