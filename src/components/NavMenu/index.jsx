import { NavLink } from "react-router-dom";


const NavMenu = () => {
  return (
    <nav>
      <ul>
              <li><NavLink to={"/"}>home</NavLink></li>
              <li><NavLink to={"./coords"}>coords</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavMenu;
