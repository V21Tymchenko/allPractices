import { FC } from "react";
import { NavLink } from "react-router-dom";
import { navigationLink } from "../../helpers/localData/navigation";
import css from "./Header.module.css";
import { useProjContext } from "../../context/context";

const Header: FC = () => {
  const data = useProjContext();
  // console.log(data);
  return (
    <header>
      <nav>
        <ul className={css.navigationList}>
          {navigationLink.map(({ to, text }) => (
            <li key={text}>
              <NavLink to={to}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
