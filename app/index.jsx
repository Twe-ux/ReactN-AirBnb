import "../global.css";

import { View } from "react-native";
import { Redirect } from "expo-router";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Redirect href={"/auth/login"} />;
    </View>
  );
};

export default Index;
