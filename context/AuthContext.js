import { createContext } from "react";

const AuthContext = createContext({
  //Default value state
  userId: null,
  userToken: null,
  userParams: null,

  //Error function
  login() {
    console.warn("Invoked the default AuthContext.login implementation.");
  },
  logout() {
    console.warn("Invoked the default AuthContext.logout implementation.");
  },
});

export default AuthContext;
