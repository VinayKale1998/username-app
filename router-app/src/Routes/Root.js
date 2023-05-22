import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation ";
import classes from "./Root.module.css"

const Root = () => {
  return (
    <div>
        <MainNavigation></MainNavigation>
    <main className={classes.content}>
  
      <Outlet ></Outlet>
    </main>
    </div>
  );
};

export default Root;