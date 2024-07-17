import PropTypes from 'prop-types';
import { useEffect, useId } from 'react';
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

  const idNav = useId();

     useEffect(() => {
    const handleClickWindow = (target) => {
      const navElement = document.getElementById(idNav);
      if (target !==navElement) {
        setIsMenuOpen(false);
      }
  
    };




    window.addEventListener('click', handleClickWindow);
    return () => {
      window.removeEventListener('click', handleClickWindow);
    };
  }, [idNav, setIsMenuOpen]);

  return (
    <nav className={classNames} id={idNav}>
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
