import React from 'react'
import { useCounter } from './hooks/useCounter'
import Incrementer from './components/Incrementer'
import DecrementerComp from './components/DecrementerComp'

function App () {
  const { count } = useCounter()
  return (
    <div>
      <h1>useContext</h1>
      <h3>Counter: {count}</h3>
      <div className='btns'>
        <Incrementer />
        <DecrementerComp />
      </div>
    </div>
  )
}

export default App
