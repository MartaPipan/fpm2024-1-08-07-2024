import PropTypes from 'prop-types';
import { useEffect, useRef} from 'react';
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

  const refNav = useRef(null);
  useEffect(() => {
        const handleClickWindow = ({ target }) => {
      if (target !== refNav.current) {
       setIsMenuOpen(false)
      }
    };
    window.addEventListener('click', handleClickWindow);
    return () => {
     window.removeEventListener ('click', handleClickWindow);
    };
  }, [isMenuOpen]);

  return (
    <nav className={classNames} ref={refNav}>
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

NavMenu.propTypes = {
  stateMenu: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default NavMenu;
