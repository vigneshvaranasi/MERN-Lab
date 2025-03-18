import { createContext } from 'react'
import { useState } from 'react'

const CounterContext = createContext()

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{count,setCount}}>{children}</CounterContext.Provider>
  )
}
export { CounterContext }
export default CounterProvider