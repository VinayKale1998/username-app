import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.nav}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Create New
        </NavLink>

        <NavLink
          to="/MyFlashCards"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          My FlashCards
        </NavLink>

        
      </nav>
    
    </div>
    
  );
};

export default MainNavigation;
