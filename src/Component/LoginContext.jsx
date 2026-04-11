import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedin") === "true"
  );

  return (
    <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};