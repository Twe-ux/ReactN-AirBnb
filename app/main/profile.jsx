import { Button, View } from "react-native";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input, InputLarge, SubmitButton } from "../../components/index";

const Profile = () => {
  const { logout } = useContext(AuthContext);

  const logoutSubmit = async () => {
    // console.log("pressed !");
    await AsyncStorage.removeItem("user");
    logout();
  };

  return (
    <View View className="gap- flex-1 items-center justify-center gap-5">
      <View className="w-full gap-10 p-10">
        <Input
          placeholder={"Email"}
          inputMode={"email"}
          autoCapitalize={"none"}
          autoComplete={"email"}
          secure={false}
          // setState={setEmail}
        />
        <Input
          placeholder={"Username"}
          inputMode={"text"}
          autoCapitalize={"none"}
          autoComplete={"off"}
          secure={false}
          // setState={setUsername}
        />
        <View className="w-full">
          <InputLarge placeholder={"Changer vos données"} />
        </View>
      </View>

      <SubmitButton text={"Update"} onPressFunc={logoutSubmit} />
      <SubmitButton text={"Logout"} onPressFunc={logoutSubmit} logout />
    </View>
  );
};

export default Profile;
