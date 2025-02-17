import React from 'react'
import { useReducer } from 'react'

function UseReducer () {
  const reducer = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return 0
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h2>useReducer</h2>
      <p>Counter: {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer
