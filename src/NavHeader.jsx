import { useState } from 'react'
import './App.css'

function NavHeader() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <span>My Portfolio Site</span>
      <a>Some Link</a>
      <a>Something else</a>
      <a>Contact Me</a>
    </header>
  )
}

export default NavHeader