import { useContext, useState, useEffect, useCallback, useMemo } from "react";
import cx from 'classnames';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../contexts";
import NavMenu from "../NavMenu";
import CONSTANTS from "../../constants";
const { THEME } = CONSTANTS;

function calcPower(n) {
  let sum = 0;
  for (let i = 0; i < 100000000; i++){
    sum += i;
  }
  return sum ** n;
}


const Header = () => {
  const [text, setText] = useState('search');
  const { login, avatar } = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === THEME.LIGHT;
  
  const handleTheme = useCallback(() => {                     //Функція зміни теми
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT); 
  }, [isLightTheme, setTheme]);

  const handleInput = useCallback(                     //Функція обробки вводу
    ({ target: { text } }) => {
      setText(text);
    }, [setText]
    //handleInput не потребує text у списку залежностей, оскільки він лише встановлює значення text.
  );

  const handleLogValue = useCallback(() => {        //Функція логування значення
    console.log(text);   //Змінна стану text визначена за допомогою useState, тому її потрібно використовувати у полі вводу та у console.log.
  }, [text]);

  useEffect(() => {
    console.log('create function handleLogValue');
  }, [handleLogValue]);

  const classNames = cx(styles.header, {
    [styles.light]: isLightTheme,
    [styles.dark]: !isLightTheme,
  });
   
  //const showPowerUseMemo useMemo(() => calcPower(text.light), [text])

  return (
    <header className={classNames}>
      <h2>{ calcPower(text.length)}</h2>
      <NavMenu />
      <button className={styles.button} onClick={handleTheme}>
        {isLightTheme ? <ModeNightIcon /> : <LightModeIcon />}
      </button>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
      <input value={text} onChange={handleInput} />
      <button onClick={handleLogValue}>log value</button>
    </header>
  );
};

export default Header;


/**
 *   const handleTheme = useCallback(() => {
    setTheme(isLightTheme ? THEME.DARK : THEME.LIGHT); 
  }, [isLightTheme, setTheme]);
 *
 * вже використов. isLightTheme, що є похідним від theme, включення theme у масив залежностей створює додатковий непотрібний виклик,слід залишити тільки необхідні залежності у масиві залежностей, які дійсно впливають на функцію: isLightTheme та setTheme.
 * isLightTheme: Ця змінна визначає, яка тема (світла або темна) є поточною, і тому важлива для функції handleTheme.
setTheme: Ця функція використовується для зміни теми, тому її теж потрібно включити у масив залежностей.



Пояснення коду i ERROR

const handleInput = useCallback(
  ({ target: { value } }) => {
    setText(value);
  }, [text''''''''''''']===========>>>1
);

const handleLogValue = useCallback(() => {
  console.log(value);
}, [value]);

useEffect(() => {
  console.log('create function handleLogValue');
}, [handleLogValue]);
===============>>>>>>>>>>>>>>>>>
1. handleInput
Ця функція створюється за допомогою хука useCallback. Вона приймає подію event як параметр і використовує деструктуризацію, щоб отримати значення value з event.target. Потім вона викликає setText, щоб оновити стан text.


({ target: { value } }) => {
  setText(value);
}
2. Залежності useCallback
Ви передаєте масив залежностей [text] у useCallback. Це означає, що функція handleInput буде створюватися заново щоразу, коли text змінюється. Але це не потрібно, тому що text тут не використовується безпосередньо. Це слід виправити, видаливши text з масиву залежностей.

({ target: { value } }) => {
  setText(value);
}, []
3. handleLogValue
Ця функція також створюється за допомогою useCallback. Вона просто виводить value в консоль. Але в даному випадку value також не визначено у вашому коді, замість value повинно бути text.

const handleLogValue = useCallback(() => {
  console.log(text);
}, [text]);


4. useEffect
Цей хук викликається щоразу, коли handleLogValue змінюється. Він просто виводить повідомлення в консоль. Це коректно, але важливо переконатися, що залежності правильні.

useEffect(() => {
  console.log('create function handleLogValue');
}, [handleLogValue]);


Виправлений код
Ось виправлений код з урахуванням зазначених помилок:


const handleInput = useCallback(
  ({ target: { value } }) => {
    setText(value);
  }, [setText]
);

const handleLogValue = useCallback(() => {
  console.log(text);
}, [text]);

useEffect(() => {
  console.log('create function handleLogValue');
}, [handleLogValue]);


Пояснення виправлень
Виправлення handleInput: Видалено text з масиву залежностей, оскільки він не використовується безпосередньо.
Виправлення handleLogValue: Змінено value на text для коректної роботи з станом.




const showPowerUseMemo = useMemo(() => calcPower(text.length), [text]);

Обчислення значення: calcPower(text.length) буде виконуватися лише тоді, коли змінюється значення text.
Збереження результату: useMemo збереже результат обчислення і поверне його. Якщо значення text не змінювалося між рендерами, calcPower(text.length) не буде викликатися повторно, а буде використане вже обчислене значення.
Оптимізація продуктивності: Використання useMemo дозволяє уникнути повторних затратних обчислень між рендерами, що може значно покращити продуктивність компоненту.
 */
