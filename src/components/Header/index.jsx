import { useContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../contexts";
import NavMenu from "../NavMenu";
import CONSTANTS from "../../constants";
const { THEME } = CONSTANTS;

const Header = () => {
  const { login, avatar } = useContext(UserContext);
    const [theme, setTheme] = useContext(ThemeContext);
    const isLightTheme = theme === THEME.LIGHT;
  console.log(theme);
  const handleTheme = () => {
    setTheme(theme === isLightTheme ? THEME.DARK : THEME.LIGHT);
  };

  return (
    <header className={styles.header}>
      <NavMenu />
          <button className={styles.button}  onClick={handleTheme}>
        {theme === isLightTheme? <ModeNightIcon/> : <LightModeIcon/>}
      </button>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
    </header>
  );
};

export default Header;

//   <<<<<<< antes
//const Header = () => {
// const {login} = useContext(UserContext);

//console.log(value); in console:{id: 5, login: "max", avatar: "/defava.png"}
// value: id, login, avatar
//value={ login } ====>>>const value = useContext(UserContext);const{login}= useContext(UserContext);

//return (
//<header>
//  <NavMenu />
// <span> Hi, {login}</span>
///header>
//);
//};
