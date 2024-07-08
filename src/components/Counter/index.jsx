import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAdd, setIsAdd] = useState(true);

  const changeMode = () => {
    setIsAdd(!isAdd);
  };

  const handleOperation = () => {
    //setCount(isAdd ? count +1 : count-1);
    setCount((prevCount)=> (isAdd ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={changeMode}>
        {isAdd ? "Switch to Subtract" : "Switch to Add"}
      </button>
      <button onClick={handleOperation}>
        {isAdd ? "+1" : "-1"}
      </button>
    </div>
  );
};

export default Counter;
