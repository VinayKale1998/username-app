import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div >
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "" : "")}
        >
          Create New
        </NavLink>

        <NavLink
          to="/MyFlashCards"
          className={({ isActive }) => (isActive ?"" : "")}
        >
          My FlashCards
        </NavLink>

        
      </nav>
    
    </div>
    
  );
};

export default MainNavigation;
