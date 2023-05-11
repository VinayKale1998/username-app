
import React from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    onLogin:()=>{},
    onLogout:()=>{}
  })// object which has components


  export default AuthContext;

   