import React, { useContext } from 'react'
import { CounterContext } from '../store/CounterProvider'
function  DecrementerComp() {
  const { setCount } = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}

export default DecrementerComp
