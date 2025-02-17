import React, { useState } from 'react'

function UseState () {
  const [counter, setCounter] = useState(0)
  return(
    <div>
        <h2>useState</h2>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default UseState
