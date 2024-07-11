import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import Header from "./components/Header";
import Coords from "./components/Coords";


function App() {
  return (
    <BrowserRouter>
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/coords" element={<Coords />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

//const [visible, setVisible] = useState(true);
// const handleVisible=() => { setVisible(!visible) };
