import { useState } from 'react'
import './App.css'

function NavHeader() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <span>My Portfolio Site</span>
      <a href='https://cs.brown.edu/courses/csci1300/'>Some Link</a>
      <a href='https://cs.brown.edu/courses/csci1300/'>Something else</a>
      <a href='https://cs.brown.edu/courses/csci1300/'>Contact Me</a>
    </header>
  )
}

export default NavHeader