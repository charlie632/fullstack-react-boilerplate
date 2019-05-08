import React from 'react'
import logo from './logo.svg'
import { FirebaseContext, Firebase } from './firebase'
import './App.css'

const FirebaseClass = new Firebase()

const App: React.FC = () => {
  return (
    <FirebaseContext.Provider value={FirebaseClass}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </FirebaseContext.Provider>
  )
}

export default App
