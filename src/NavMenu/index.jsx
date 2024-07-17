import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
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
      if (target !== refNav.current && !refNav.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('click', handleClickWindow);
    return () => {
      window.removeEventListener('click', handleClickWindow);
    };
  }, [isMenuOpen, setIsMenuOpen]);

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


//**Пояснення      Оновлений useEffect: Хук useEffect тепер включає як isMenuOpen, так і setIsMenuOpen у масиві залежностей. Це забезпечує, що ефект виконується правильно, коли будь-яка з цих залежностей змінюється.

//Покращений обробник подій: Функція handleClickWindow перевіряє, чи є цільовий елемент кліку за межами навігаційного меню (refNav.current), щоб закрити меню правильно.

//Деталі
//Імпорт PropTypes: Спочатку імпортується PropTypes з пакету prop-types.

//Компонент NavMenu: Оголошується функціональний компонент NavMenu, який приймає пропси. Пропс stateMenu розпаковується у isMenuOpen та setIsMenuOpen.

//handleMenuClose: Це функція, яка закриває меню, встановлюючи isMenuOpen у false.

//classNames: Використовується бібліотека classnames (cx) для умовного застосування класів. Якщо isMenuOpen дорівнює true, додається клас openMenu.

//useRef: Використовується useRef для створення посилання на елемент навігаційного меню.

//useEffect: Використовується хук useEffect, щоб додати обробник подій кліку на вікно. Якщо клікається не на елемент меню і не в його межах, меню закривається (setIsMenuOpen(false)). Обробник видаляється при розмонтуванні компонента.

//Рендеринг меню: Компонент повертає розмітку навігаційного меню з кнопкою закриття та списком навігаційних посилань.

//PropTypes: Оголошується propTypes, щоб перевірити, що stateMenu є масивом, який є обов'язковим (isRequired). */