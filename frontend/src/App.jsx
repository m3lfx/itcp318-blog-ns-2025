import React, { useState } from 'react'
import Nav from './Nav'

import Create from './Create';

const App = () => {

  const [count, setCount] = useState(0); 
  return (
    <div className="App">
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>


    </div>
  )
}

export default App