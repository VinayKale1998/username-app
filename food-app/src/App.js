import Header from "./Components/Layout/Header";
import React, { useState, useContext } from "react";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import InputContext from "./Store/InputContext";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
 
  const [cartIsVisible, setCartVisible] = useState(false);
  const[checkedOut,setCheckout]=useState(false)

  const setItemHandler = (item,action) => {
    console.log("called");
    console.log(item);

    setCartItems((prevItems) => {
      let filteredItems;
      if(action==='ADD'){
      let newFilteredItems=[];

      [...prevItems].forEach((item1) => {
        if (item1.id == item.id) {
          console.log("same found")
          filteredItems = [...prevItems].filter((item) => item1.id != item.id);
          //create a new array and add the current and previus same value item props
          newFilteredItems = [
            ...filteredItems,
            {
              id: item.id,
              amount: Number(item1.amount) + Number(item.amount),
              name: item.name,
              description: item.description,
              price: Number(item.price),
              itemTotal: (Number(item1.amount) + Number(item.amount))* Number(item.price),
            },
          ];
        }
      });
      if (newFilteredItems.length > 0) {
        return newFilteredItems;
      }
      return [...prevItems, item];
    }

    if(action==='REMOVE')
    {

      console.log('removing')
     const filteredItems= [...prevItems].filter(item1=>{

      console.log(item1.id + "" + item)
        return item1.id!=item
      })

      console.log(filteredItems )

      return filteredItems;



    }
    });
  };

  const visibleHandler = () => {
    console.log(cartItems);
    setCartVisible(true);
  };


  const checkOutHandler=()=>{
    setCartVisible(false)
    setCheckout(true)

  }
  const closeHandler = () => {
    setCartVisible(false);
  };
  return (
    <InputContext.Provider
      value={{
        cartItems: cartItems,
        setItemHandler: setItemHandler,
        dummyMeals: DUMMY_MEALS,
      }}
    >
      <Header onClick={visibleHandler} />
      {console.log(cartItems)}
      {cartIsVisible ? (
        <Cart cartItems={cartItems} onCheckout= {checkOutHandler} onClose={closeHandler}></Cart>
      ) : (
        ""
      )}

      <main>
        <Meals />
      </main>
    </InputContext.Provider>
  );
};

export default App;
