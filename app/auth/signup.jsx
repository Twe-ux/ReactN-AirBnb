import axios from "axios";
import { useState } from "react";
import { SafeAreaView, View, Pressable, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Style
import colors from "../../assets/styles/colors";

//Components
import Entypo from "@expo/vector-icons/Entypo";
import { Input, InputLarge, Logo, Title, SubmitButton, RedirectLink } from "../../components/index";

//Hooks
import { useTogglePasswordVisibility } from "../../hook/useTogglePasswordVisibility";
import { router } from "expo-router";

export default function Signup() {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiDatas = async () => {
    const dataParams = {
      email,
      username,
      description,
      password,
    };

    // await new Promise((r) => setTimeout(r, 5000));

    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/sign_up",
        dataParams
      );
      // console.log(response);
    } catch (error) {
      // console.log(error.response.data.error);
      if (error.response.data.error === "This username already has an account.") {
        return "duplicated-username";
      } else if (error.response.data.error === "This email already has an account.") {
        return "duplicated-email";
      }
    }
  };

  const handleSignUp = async () => {
    if (email && username && description && password && confirmPassword) {
      if (password !== confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return;
      }
      setIsLoading(true);
      const result = await fetchApiDatas();
      setIsLoading(false);

      if (result == "duplicated-username") {
        alert("Ce nom d'utilisateur est déjà pris.");
      } else if (result == "duplicated-email") {
        alert("Cette adresse e-mail est déjà prise.");
      } else {
        alert("Votre inscription est bien enregistrée");
        router.navigate("/main/home/home");
      }
    } else {
      alert("Veuillez remplir tous les champs");
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}>
        <View className="h-40 items-center gap-5">
          <Logo />
          <Title text={"Sign Up"} />
          {isLoading && <ActivityIndicator size="large" color={colors.pink} />}
        </View>
        <View className="flex-1 items-center justify-around">
          <View className="w-full gap-8 p-10">
            <Input
              placeholder={"Email"}
              inputMode={"email"}
              autoCapitalize={"none"}
              autoComplete={"email"}
              secure={false}
              setState={setEmail}
            />
            <Input
              placeholder={"Username"}
              inputMode={"text"}
              autoCapitalize={"none"}
              autoComplete={"off"}
              secure={false}
              setState={setUsername}
            />
            <InputLarge
              placeholder={"Describe yourself in a few words ..."}
              setState={setDescription}
            />

            <View className="justify-center">
              <Input
                placeholder={"Password"}
                inputMode={"text"}
                autoCapitalize={"none"}
                autoComplete={"off"}
                secure={passwordVisibility}
                setState={setPassword}
              />
              <Pressable className="absolute end-0" onPress={handlePasswordVisibility}>
                <Entypo name={rightIcon} size={22} color="grey" />
              </Pressable>
            </View>
            <View className="justify-center">
              <Input
                placeholder={"Confirm password"}
                inputMode={"text"}
                autoCapitalize={"none"}
                autoComplete={"off"}
                secure={passwordVisibility}
                setState={setConfirmPassword}
              />
              <Pressable className="absolute end-0" onPress={handlePasswordVisibility}>
                <Entypo name={rightIcon} size={22} color="grey" />
              </Pressable>
            </View>
          </View>
        </View>
        <View className="w-full items-center gap-5">
          <SubmitButton text={"Sign Up"} onPressFunc={handleSignUp} isLoading={isLoading} />
          <RedirectLink text={"Already have an account ? Login !"} screen={"/auth/login"} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
