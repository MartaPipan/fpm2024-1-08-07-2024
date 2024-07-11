import { useState } from "react";
import WatchSetTimeout from './components/WatchSetTimeout';

function App() {
  const [visible, setVisible] = useState(true);
  const handleVisible=() => { setVisible(!visible) };
  return (
    <>
      <button onClick={handleVisible}>visible { visible ? "On":"Off"}</button>
      {visible && <WatchSetTimeout/>}
    </>
  );
}
export default App;
