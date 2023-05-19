import Counter from "./components/Counter";
import Header from "./components/Header"
import Auth from "./components/Auth"
import { useSelector } from "react-redux";
import { authActions } from "./store";

import React from 'react'

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Auth></Auth>
      <Counter />
    </React.Fragment>
  );
}

export default App;
