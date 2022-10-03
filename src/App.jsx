import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <header>
        <h1>Personas and Storyboarding</h1>
        <p>Here's a description of the project. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>Here's what I had to do for it.</p>
      </header>
      <section>
        <h2>Preperation</h2>
        <p>Describe what this task asked.</p>
        <p>Describe what I did for it.</p>
      </section>
      <section>
        <h2>Observations</h2>
        <p>Describe what this task asked.</p>
        <p>Describe what I did for it.</p>
      </section>
      <section>
        <h2>Personas</h2>
        <p>Describe what this task asked.</p>
        <p>Describe what I did for it.</p>
      </section>
      <section>
        <h2>Storyboarding</h2>
        <p>Describe what this task asked.</p>
        <p>Describe what I did for it.</p>
      </section>
    </main>
  )
  // return (
  //   <div className="App">
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src="/vite.svg" className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://reactjs.org" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </div>
  // )
}

export default App
