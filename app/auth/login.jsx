import axios from "axios";
import { useState } from "react";
import { SafeAreaView, View, Pressable, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

//Style
import colors from "../../assets/styles/colors";

//Components
import Entypo from "@expo/vector-icons/Entypo";
import { Input, Logo, RedirectLink, SubmitButton, Title } from "../../components/index";

//Hooks
import { useTogglePasswordVisibility } from "../../hook/useTogglePasswordVisibility";

const Login = () => {
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchApiDatas = async () => {
    const dataParams = {
      email,
      password,
    };

    await new Promise((r) => setTimeout(r, 5000));

    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        dataParams
      );

      // console.log(response.data);
    } catch (error) {
      if (error.response.data.error === "Unauthorized") {
        return "bad-password";
      } else if (error.response.data.error === "This account doesn't exist !") {
        return "not-email";
      }
    }
  };

  const handleSignIn = async () => {
    if (email && password) {
      console.log("ok");
      // Ici, le code pour envoyer les données à l'API
      // const result = onSignInRequest(email, password);
      setIsLoading(true);
      const result = await fetchApiDatas();
      // console.log(result);
      setIsLoading(false);
      // login();

      if (result == "not-email" || result == "bad-password") {
        alert("Adresse mail ou mot de passe éronné");
      } else alert("Votre inscription est bien enregistrée");
    } else {
      alert("Veuillez entrer un email et un mot de passe");
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
        <View className="mb-10 h-10 items-center gap-5">
          <Logo />
          <Title text={"Sign In"} />
          {isLoading && <ActivityIndicator size="large" color={colors.pink} />}
        </View>
        <View className="flex-1 items-center justify-around">
          <View className="w-full gap-10 p-10">
            <Input
              placeholder={"Email"}
              inputMode={"email"}
              autoCapitalize={"none"}
              autoComplete={"email"}
              secure={false}
              setState={setEmail}
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
          </View>
        </View>
        <View className="w-full items-center gap-5">
          <SubmitButton text={"Sign In"} onPressFunc={handleSignIn} isLoading={isLoading} />
          <RedirectLink text={"No account ? Register !"} screen={"/auth/signup"} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
