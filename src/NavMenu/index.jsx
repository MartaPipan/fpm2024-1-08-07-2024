
import { NavLink } from "react-router-dom";
import cx from 'classnames';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./NavMenu.module.scss";

const NavMenu = (props) => {
  const { stateMenu: [isMenuOpen, setIsMenuOpen] } = props;

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const classNames = cx(styles.nav, { [styles.openMenu]: isMenuOpen });

  return (
    <nav className={classNames}>
      <CloseIcon className={styles.close} onClick={handleMenuClose} />
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
