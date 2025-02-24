import { Slot, router } from "expo-router";
import { useState, useEffect } from "react";
import AuthProvider from "../components/provider/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  return (
    // <AuthContext.Provider value={{ userToken, userId, login, logout, onHold }}>
    <AuthProvider>
      <Slot screenOptions={{ headerShown: false }} />
    </AuthProvider>
    // </AuthContext.Provider>
  );
}
