import { createContext, useState } from "react";

const initialState = {
  isLoggedIn: false,
  Token: "",
  login: () => {},
  signUp: () => {},
  logOut: () => {},
};
export const authContext = createContext(initialState);
const AuthProvider = (props) => {
  const [Token, setToken] = useState(null);
  const isLoggedIn = localStorage.getItem("token");
  const login = (token, expireTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expireIn", expireTime);
  };
  const logOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expireIn");
  };
  const signUp = (token, expireTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expireIn", expireTime);
  };
  const value = {
    isLoggedIn,
    Token,
    login,
    logOut,
    signUp,
  };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthProvider;
