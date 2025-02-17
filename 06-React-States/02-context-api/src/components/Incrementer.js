import React from 'react'
import { useCounter } from '../hooks/useCounter'

function Incrementer () {
  const { setCount } = useCounter()
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

export default Incrementer
