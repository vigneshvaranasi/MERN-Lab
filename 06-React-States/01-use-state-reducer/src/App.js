import React from 'react'
import { useState } from 'react'
import UseState from './UseState'
import UseReducer from './UseReducer'

function App () {
  const [showState, setShowState] = useState(false)
  const [showReducer, setShowReducer] = useState(false)

  return (
    <div>
      <h1>useState & useReducer</h1>
      <button onClick={() => setShowState(!showState)}>useState Demo</button>
      <button onClick={() => setShowReducer(!showReducer)}>
        useReducer Demo
      </button>
      {showState && <UseState />}
      {showReducer && <UseReducer/>}
    </div>
  )
}

export default App
