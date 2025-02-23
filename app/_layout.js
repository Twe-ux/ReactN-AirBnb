import { Slot, router } from "expo-router";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
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

  console.log("test", onHold);

  useEffect(() => {
    if (userToken && userId) {
      router.replace("/main/home");
    } else {
      // router.replace("/");
      router.replace("/auth/login");
    }
  }, [userToken, userId]);

  return (
    <AuthContext.Provider value={{ userToken, userId, login, logout, onHold }}>
      <Slot screenOptions={{ headerShown: false }} />
    </AuthContext.Provider>
  );
}
