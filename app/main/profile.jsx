import { Button, View } from "react-native";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View View className="flex-1 items-center justify-center">
      <Button
        title="Deconnection"
        onPress={async () => {
          // console.log("pressed !");
          await AsyncStorage.removeItem("user");
          logout();
        }}
      />
    </View>
  );
};

export default Profile;
