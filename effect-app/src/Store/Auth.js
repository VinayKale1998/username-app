import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";

export default function Auth(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggeInLocalConfirm = localStorage.getItem("loggedIn");

    if (isLoggeInLocalConfirm === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
