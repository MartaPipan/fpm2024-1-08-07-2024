import { NavLink } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./NavMenu.module.scss";


const NavMenu = () => {

  //const classNames = cx(styles.nav);

  return (
    <nav className={styles.nav}>
      <CloseIcon className={styles.close} />
      <ul>
        <li><NavLink to={"/"}>home</NavLink></li>
        <li><NavLink to={"/coords"}>coords</NavLink></li>
        <li><NavLink to={"/books"}>books</NavLink></li>
         <li><NavLink to={"/events"}>events</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavMenu;