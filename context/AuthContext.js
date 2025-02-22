import { createContext } from "react";

/** Context used for Authentification. */
const AuthContext = createContext({});
//   play() {
//     console.warn("Invoked the default PetContext.play implementation.");
//   },

const AuthProvider = ({ children }) => {
  // states
  // fonctions
  return <AuthContext.Provider value={{ state, func }}>{children}</AuthContext.Provider>;
};

export { AuthContext };
