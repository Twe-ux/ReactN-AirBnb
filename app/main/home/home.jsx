import { Button, View, Text } from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";

const Home = () => {
  const { userId, userToken } = useContext(AuthContext);

  const userParams = JSON.stringify({
    id: userId,
    token: userToken,
  });
  // console.log(userParams);

  return (
    <View View className="flex-1 items-center justify-center">
      <Button
        title="Vers Map"
        onPress={() => {
          // console.log("pressed !");
          router.navigate("/main/map");
        }}
      />
      <Button
        title="mettre qqchose dans l'async"
        onPress={async () => {
          await AsyncStorage.setItem("user", userParams);
        }}
      />
      <Button
        title="get user from async"
        onPress={async () => {
          const result = await AsyncStorage.getItem("user");
          // console.log(result);
        }}
      />
      <Button
        title="Recup user from async"
        onPress={async () => {
          const result = await AsyncStorage.getItem("user");
          const user = JSON.parse(result);
          console.log(user.id);
        }}
      />
      {/* <Text>{user}</Text> */}
      <Button
        title="get all keys"
        onPress={async () => {
          const result = await AsyncStorage.getAllKeys();
          console.log(result);
        }}
      />
      <Button
        title="remove  keys"
        onPress={async () => {
          const result = await AsyncStorage.removeItem("user");
          console.log(result);
        }}
      />
    </View>
  );
};

export default Home;
