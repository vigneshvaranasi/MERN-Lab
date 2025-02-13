import React, { useState } from 'react'

function App () {
  const [input, setInput] = useState('')

  const handleClick = value => {
    setInput(input + value)
  }

  const handleCalculate = () => {
    console.log('input: ', input)
    try {
      const result = eval(input)
      setInput(result.toString())
    } catch (error) {
      setInput('Error')
    }
  }

  function handleClear () {
    setInput('')
  }

  return (
    <div>
      <h1 className='head'>Calculator</h1>
      <div className='calculator'>
        <div className='display'>
          <h1>{input || '0'}</h1>
        </div>
        <div className='buttons'>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleClear}>AC</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
