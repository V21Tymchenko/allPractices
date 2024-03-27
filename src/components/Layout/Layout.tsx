import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import css from "./Layout.module.css";

const Layout: FC = () => {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
