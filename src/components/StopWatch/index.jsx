import { useState, useEffect } from "react";
import { addSeconds, format } from "date-fns";
import styles from './StopWatch.module.scss';

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const handleIsRunning = () => {
    setIsRunning(!isRunning);
  };
    
  const handleReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
    setIsRunning(false);
  };
  
  useEffect(() => {
    if (isRunning) {
      console.log("add interval");
      const IdInterval = setTimeout(() => {
        setTime((time) => addSeconds(time, 1));
      }, 1000);
      return () => {
        clearTimeout(IdInterval);
        console.log("clear interval");
      };
    }
  }, [isRunning, time]);

  return (
    <div className={styles.container}>
      <h2 className={styles.watch}>{format(time, 'HH : mm : ss')}</h2>
      <button onClick={handleIsRunning} className={styles.button}>
        {isRunning ? "stop" : "start"}
      </button>
      <button onClick={handleReset} className={styles.button}>
        reset
      </button>
    </div>
  );
};

export default StopWatch;
