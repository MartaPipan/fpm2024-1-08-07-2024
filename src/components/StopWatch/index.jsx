import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleIsRunning = () => {
    setIsRunning(!isRunning);
  };

  //   if (isRunning) { did not used !!!!!!!!!!!       we used inside hooks useEffect!!!

  useEffect(() => {
    if (isRunning) {
      console.log("add interval");
      const IdInterval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => {
        clearInterval(IdInterval);
        console.log("clear interval");
      };
    }
  }, [isRunning]);

  return (
    <div>
      <h2>{time}</h2>
      <button onClick={handleIsRunning}>{isRunning ? "stop" : "start"}</button>
    </div>
  );
};

export default StopWatch;
