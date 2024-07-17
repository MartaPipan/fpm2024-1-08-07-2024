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





//**Оголошення handleClickWindow:
//const handleClickWindow = ({ target }) => {
//Це функція, яка приймає об'єкт події (event object). Використовується деструктуризація, щоб в//итягти властивість target, яка вказує на елемент, на який було клікнуто.

//Перевірка цілі кліку:
//if (target !== refNav.current && !refNav.current.contains(target)) {
//Ця перевірка робить наступне:
//target !== refNav.current: Перевіряє, чи не є цільовий елемент самим навігаційним меню.
//!refNav.current.contains(target): Перевіряє, чи не є цільовий елемент всередині навігаційного //меню (чи не міститься він у ньому).
//Якщо жодна з цих умов не виконується (тобто, кліку було здійснено за межами меню), то виконується закриття меню:
//Закриття меню:setIsMenuOpen(false);
//Викликає функцію для зміни стану isMenuOpen на false, що закриває меню.
//Додавання обробника подій:
//window.addEventListener('click', handleClickWindow);
  //Додає обробник подій кліку на вікно браузера. Це означає, що функція handleClickWindow буде викликатися кожного разу, коли користувач клікає будь-де на сторінці.
  
//Очищення обробника подій:return () => {window.removeEventListener('click', handleClickWindow);};
  //Повертає функцію очищення, яка видаляє обробник подій при розмонтуванні компонента або при зміні залежностей. Це важливо для запобігання утворенню багатьох обробників подій, що можуть призвести до витоку пам'яті або інших небажаних побічних ефектів.
  
//Масив залежностей:
// }, [isMenuOpen, setIsMenuOpen]);
//useEffect буде запускатися кожного разу, коли змінюється isMenuOpen або setIsMenuOpen. Це гарантує, що обробник подій буде актуальним відносно поточного стану компонента.
