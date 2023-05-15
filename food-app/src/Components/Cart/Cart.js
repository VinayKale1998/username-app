import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import Card from '../UI/Card';
import { useContext } from 'react';
import InputContext from '../../Store/InputContext';

const Cart = (props) => {


  const ctx= useContext(InputContext)

  const removeHandler=(event)=>{
    event.preventDefault();
    console.log(event)
    ctx.setItemHandler(event.target.value,'REMOVE')

  }


  const cartItems = props.cartItems.map((item) => (
    <li  key={item.id}> <div className={classes.item}><h1>{item.name} </h1><h1>{item.amount}</h1><h1> {`$${(item.itemTotal).toFixed(2)}`} <button value={item.id} onClick={removeHandler}>remove</button></h1></div></li>
  ));

  return (


    <Modal onClose={props.onClose}>
        
      <ul className={classes['cart-items']}> {cartItems} </ul>
    
        { cartItems.length>0 &&
      <div className={classes.total}>
        <span> </span>
        <span> </span>
      </div>}
      {cartItems.length===0 && <Card className={classes.empty}><h1> Your Cart is Empty </h1></Card>}

      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>close </button>
        <button className={classes.button}  onClick={props.onCheckout}>Checkout </button>
      </div>
      </Modal>
   
  );
};

export default Cart;
