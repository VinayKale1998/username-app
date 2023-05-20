import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import Dummy from "./Dummy"

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            {console.log("main header called")}
            <CartButton />
        
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
