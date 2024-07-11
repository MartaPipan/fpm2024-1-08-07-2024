import { useState, useEffect } from "react";
import "./Clicker.css";

const Clicker = () => {
  const [clickCount, setClickCount] = useState(0);
  const [step, setStep] = useState(1);
    const handleStep = ({ target: { value } }) => {
    setStep(Number(value));
  };

  useEffect(() => {
    const handleClick = () => {
      setClickCount((clickCount) => clickCount + step);
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.addEventListener("click", handleClick);
    };
  }, [step]);

  return (
    <h2>
      Clicker:{clickCount}
      <input type="number" value={step} onChange={handleStep}></input>
    </h2>
  );
};

export default Clicker;

/**import { useState, useEffect } from "react";
import "./{createConnection} from './chat.js';

func ChatRoom({ room Id}){
const[serverUrl, setServerUrl] = useState ('https://localhost:123');

useEffect(()=>{
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return()=>{
        connection.disconnect();
        };
        }, [serverUrl, roomId]);
        }

*/
