import { useState, useEffect } from "react";
import { router } from "expo-router";
import AuthContext from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [onHold, setOnHold] = useState(false);

  const localStorageParams = async () => {
    // await new Promise((r) => setTimeout(r, 2000));
    const stored = await AsyncStorage.getItem("user");
    const user = JSON.parse(stored);
    if (user.id && user.token) {
      setUserId(user.id);
      setUserToken(user.token);
    }
    setOnHold(true);
  };
  localStorageParams();

  const login = (id, token) => {
    setUserId(id);
    setUserToken(token);
    // alert("Login sucess");
  };

  const logout = () => {
    setUserId(null);
    setUserToken(null);
    setOnHold(false);
    // alert("Logout done");
  };

  useEffect(() => {
    if (userToken && userId) {
      router.replace("/main/home");
    } else {
      router.replace("/auth/login");
    }
  }, [userToken, userId]);

  return (
    <AuthContext.Provider value={{ userId, userToken, onHold, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
