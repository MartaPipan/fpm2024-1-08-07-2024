import { useState } from "react";
import WatchSetTimeout from './components/WatchSetTimeout';
import StopWatch from "./components/WatchSetTimeout";

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible=() => { setVisible(!visible) };
  return (
    <></>
  );
}
export default App;

