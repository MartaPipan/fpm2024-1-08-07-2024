import { useContext } from "react";
import styles from "./Header.module.scss";
import { UserContext, ThemeContext } from "../../contexts";
import NavMenu from "../NavMenu";


const Header = () => {
    const { login, avatar } = useContext(UserContext);
    const value = useContext(ThemeContext);
    console.log(value);

  return (
    <header className={styles.header}>
      <NavMenu />
      <button>light:dark</button>
      <span>
        Hi, {login}
        <img src={avatar} alt="avatar" />
      </span>
    </header>
  );
};

export default Header;








//   <<<<<<< antes
//const Header = () => {
// const {login} = useContext(UserContext);

//console.log(value); in console:{id: 5, login: "max", avatar: "/defava.png"}
// value: id, login, avatar
//value={ login } ====>>>const value = useContext(UserContext);const{login}= useContext(UserContext);

//return (
//<header>
//  <NavMenu />
// <span> Hi, {login}</span>
///header>
//);
//};
