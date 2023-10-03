import React, { useState } from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={decrementCount}>-1</button>
      <button onClick={incrementCount}>+1</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root')); // Use ReactDOM.render to render the Counter component
