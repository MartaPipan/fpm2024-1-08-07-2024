import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
   const  add = () => { setCount(count + 1) };
    const sub = () => { setCount(count - 1) };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={add}>add 1</button>
      <button onClick={sub}>sub 1</button>
    </div>
  );
};

export default Counter;
