import { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";
import Wrapper from "./Components/Helpers/Wrapper"

function App() {

  const[items,setItems]= useState([])

  const addItemHandler=(item)=>{
    setItems(prevItems=>{
      return [...prevItems,item]
    })
  }
  return (
    <Wrapper>
      
<AddUser onItemAdd={addItemHandler}></AddUser>
<UserList items={items}></UserList>
    </Wrapper>
  );
}

export default App;
