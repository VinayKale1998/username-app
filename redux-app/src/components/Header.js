import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';
const Header = (props) => {


  const auth=useSelector(state=>state.auth.isLogin) 
  const dispatch = useDispatch()

  const logOutHandler = ()=>{
    dispatch(authActions.logout())
    
  }

  // const auth= localStorage.getItem("loggedIn")
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
           { auth===1 &&<button onClick={logOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
