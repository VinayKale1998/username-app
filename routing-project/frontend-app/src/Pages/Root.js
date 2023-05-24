import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css"

const Root = () => {
  return (
    <div>
      <div className={classes.header}>
        <MainNavigation></MainNavigation>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
