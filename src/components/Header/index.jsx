import { useContext } from "react";
import cx from 'classnames';
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

  const handleTheme = () => {
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT);
  };

  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });

  return (
    <header className={classNames}>
      <NavMenu />
      <button className={styles.button} onClick={handleTheme}>
        {isLightTheme ? <ModeNightIcon /> : <LightModeIcon />}
      </button>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
    </header>
  );
};

export default Header;
