import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
    console.log(classes)
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <h1><NavLink to="" end  className={({isActive})=>isActive?classes.active:undefined}>HomePage </NavLink></h1>
          </li>
          <li >
          <h1> <NavLink to="products" className={({isActive})=>isActive?classes.active:undefined}>Products </NavLink></h1>
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
