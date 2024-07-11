import { useState } from "react";
import Clicker from "./components/Clicker";

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible=() => { setVisible(!visible) };
  return (
    <>
      <button onClick={handleVisible}>visible{ visible ? "on":"off"}</button>
      {visible && <Clicker/>}
      <Clicker/>
    </>
  );
}
export default App;
