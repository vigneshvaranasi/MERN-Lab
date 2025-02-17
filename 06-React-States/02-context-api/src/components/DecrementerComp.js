import React from 'react'
import { useCounter } from '../hooks/useCounter'

function  DecrementerComp() {
  const { setCount } = useCounter()
  return (
    <div>
      <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
    </div>
  )
}

export default DecrementerComp
