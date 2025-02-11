import './App.css';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <div className="App">
      <form>        
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </form>
      <h1>{input}</h1>
    </div>
  );
}

export default App;