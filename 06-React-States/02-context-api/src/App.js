import React, { useContext } from 'react'
import Incrementer from './components/Incrementer'
import DecrementerComp from './components/DecrementerComp'
import {CounterContext} from './store/CounterProvider'

function App () {
  const {count} = useContext(CounterContext)
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
