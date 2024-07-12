import { NavLink } from "react-router-dom";
import styles from './NavMenu.module.scss';


const NavMenu = () => {
  return (
    <nav  className={styles.header}>
      <ul>
              <li><NavLink to={"/"}>home</NavLink></li>
              <li><NavLink to={"./coords"}>coords</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
