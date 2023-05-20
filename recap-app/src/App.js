import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from "react-redux";

import React from "react";

function App() {
  const show = useSelector((state) => state.cart.show);
  return (
   
      <Layout>
     { show && <Cart />}
      <Products />
    </Layout>
 
   
  );
}

export default App;
