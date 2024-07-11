import { useState } from "react";
import Clicker from "./components/Clicker";

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible=() => { setVisible(!visible) };
  return (
    <>
      <button onClick={handleVisible}>visible { visible ? "Off":"On"}</button>
      {visible && <Clicker/>}
    </>
  );
}
export default App;
