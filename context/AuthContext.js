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

// const AuthProvider = ({ children }) => {
//   const [userToken, setUserToken] = useState(null);
//   const [userId, setUserId] = useState(null);

//   const login = (id, token) => {
//     setUserId(id);
//     setUserToken(token);
//     alert("Login sucess");
//   };

//   const logout = () => {
//     setUserId(null);
//     setUserToken(null);
//     alert("Logout done");
//   };

//   return (
//     <AuthContext.Provider value={{ userId, userToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export default AuthProvider;

export default AuthContext;
