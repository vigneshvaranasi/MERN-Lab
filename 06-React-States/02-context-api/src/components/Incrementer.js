import React, { useContext } from 'react'
import {CounterContext} from '../store/CounterProvider'

function Incrementer () {
  const { setCount } = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  )
}

export default Incrementer
