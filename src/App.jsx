import { BrowserRouter, Routes, Route } from "react-router-dom";
import StopWatch from "./components/StopWatch";
import Coords from "./components/Coords";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path="/" element={<StopWatch />}></Route>
        <Route path="/coords" element={<Coords />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//const [visible, setVisible] = useState(true);
// const handleVisible=() => { setVisible(!visible) };
