import { useContext } from "react";
import cx from 'classnames';
import styles from "./Menu.module.scss";
import { ThemeContext } from "../../contexts";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [theme] = useContext(ThemeContext);
  const classNames = cx(styles.header, {
    [styles.light]: theme === 'light',
    [styles.dark]: theme === 'dark',
  });

  return (
    <nav className={classNames}>
      <ul>
        <li><NavLink to={"/"}>home</NavLink></li>
        <li><NavLink to={"/coords"}>coords</NavLink></li>
        <li><NavLink to={"/books"}>books</NavLink></li>
         <li><NavLink to={"/events"}>events</NavLink></li>
      </ul>
    </nav>
  );
};

export default Menu;
