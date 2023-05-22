import classes from './CartItem.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';


const CartItem = (props) => {

  const dispatch= useDispatch()


  const removeHandler=()=>{
    dispatch(cartActions.removeItem(props.item.id))
  }

  const addHandler=()=>{
    console.log(props.item.id)
    dispatch(cartActions.addByone(props.item.id))
  }


  const { title, qty, price,id } = props.item
  console.log(title);

  return (
    <li className={classes.item} key={id}>
      {console.log(id)}
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price*qty.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{qty}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
