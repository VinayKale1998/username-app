import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../Store/auth-context';

const Navigation = (props) => {

  const ctx=useContext(AuthContext)
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <Button onClick={ctx.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
