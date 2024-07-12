import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContext } from "./contexts";

import HomePage from "./pages/HomePage";

import Header from "./components/Header";
import Coords from "./components/Coords";

function App() {
  const [user, setUser] = useState({
    id: 5,
    login: "max",
    avatar: "/avatar.png",
  });
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coords" element={<Coords />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;

//const [visible, setVisible] = useState(true);
// const handleVisible=() => { setVisible(!visible) };
