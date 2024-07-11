import { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    
    const handleIsRunning = () => {
        setIsRunning(!isRunning);
    }

        //   if (isRunning) { did not used !!!!!!!!!!!       we used inside hooks useEffect!!!!
     }

  useEffect(() => {
    console.log("add interval");
    const IdInterval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => {
      clearInterval(IdInterval);
      console.log("clear interval");
    };
  }, []);
    
  return (
    <div>
      <h2>
        {time}
        <button onClick={handleIsRunning}> {isRunning ? "stop" : "start"}</button>
      </h2>
    </div>
  );
};

export default StopWatch;
