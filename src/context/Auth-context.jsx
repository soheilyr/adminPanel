import { createContext, useState } from "react";
const initialState = {
  isLoggedIn: false,
  Token: "",
  login: () => {},
  signUp: () => {},
};
export const authContext = createContext(initialState);
const AuthProvider = (props) => {
  const [Token, setToken] = useState(null);
  const isLoggedIn = !!Token;
  console.log(isLoggedIn);
  const login = (token, expireTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expireIn", expireTime);
  };

  const signUp = () => {};
  const value = {
    isLoggedIn,
    Token,
    login,
    signUp,
  };
  return (
    <authContext.Provider value={value}>{props.children}</authContext.Provider>
  );
};

export default AuthProvider;
