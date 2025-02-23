import { Button, View } from "react-native";
import { router } from "expo-router";

const Map = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Button
        title="Vers profile"
        onPress={() => {
          // console.log("pressed !");
          router.navigate("/main/profile");
        }}
      />
    </View>
  );
};

export default Map;
