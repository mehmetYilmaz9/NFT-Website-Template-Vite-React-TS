import { useState } from 'react'
import Nav from "./components/Nav"
import Hero from './components/Home'

function App() {

  return (
    <div className="mx-4  bg-themeLight ">
      <Nav />
      <Hero />
    </div>
  )
}

export default App
