import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/cartSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const { title, price, description, id } = props.item;

  const addHandler = () => {

    //an approach where we do the transformation here in the component rather than doing it in the reducer 
    // console.log(cartItems)
    // const updatedItems = [...cartItems];
  
    // const index = updatedItems.findIndex((item) => item.id === id);
    // if (index>=0) {
    //   const existingItem = { ...updatedItems[index] };
    //   existingItem.qty++;
   
    //   updatedItems[index] = existingItem;
    //   dispatch(cartActions.transformCart(updatedItems));

    // }//if end
    
    // else {
    //   updatedItems.push();
    //   dispatch(cartActions.transformCart(updatedItems))
     
    //   console.log('else called')
    // }//else end
   dispatch(cartActions.addItem({id:id,price:price,qty:1,description:description,title:title}))


  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
