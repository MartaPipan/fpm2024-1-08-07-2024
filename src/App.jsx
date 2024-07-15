import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserContext, ThemeContext } from "./contexts";

import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Coords from "./components/Coords";
import EventPage from "./pages/EventPage";
import BookPage from "./pages/BookPage";

import CONSTANTS from "./constants";
const { THEME } = CONSTANTS;

function App() {
  const [user] = useState({
    id: 5,
    login: "max",
    avatar:"../public/images/avatar.png"
  });
  const [theme, setTheme] = useState(THEME.LIGHT);
  
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/coords" element={<Coords />}></Route>
            <Route path="/books" element={<BookPage/>}></Route>
            <Route path="/events" element={<EventPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
export default App;
