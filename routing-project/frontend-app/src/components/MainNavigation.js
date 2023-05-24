import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function MainNavigation() {
  const param = useParams();
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={({isActive})=>isActive?classes.active:''}>Homepage </NavLink>
          </li>
          <li>
            <NavLink to={`events`}>EventsPage </NavLink>
          </li>
          {/* <li>
            <NavLink to={`events/new`}>NewEventsPage </NavLink>
          </li> */}
      
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
