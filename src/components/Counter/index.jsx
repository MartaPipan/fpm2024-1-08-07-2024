import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isAdd, setIsAdd] = useState(true);

  const changeMode = () => {
    setIsAdd(!isAdd);
  };

  const handleOperation = () => {
    if (isAdd) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={changeMode}>
        {isAdd ? "Switch to Subtract" : "Switch to Add"}
      </button>
      <button onClick={handleOperation}>
        {isAdd ? "Add 1" : "Subtract 1"}
      </button>
    </div>
  );
};

export default Counter;
