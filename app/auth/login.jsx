import { SafeAreaView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, Logo, RedirectLink, SubmitButton, Title } from "../../components/index";

const Login = () => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "space-between",
          marginBottom: 20,
          marginTop: 20,
        }}>
        <View className="items-center gap-5">
          <Logo />
          <Title text={"Sign In"} />
        </View>

        <View className="flex-1 items-center justify-around">
          <View className="w-full gap-10 p-10">
            <Input
              placeholder={"Email"}
              inputMode={"email"}
              autoCapitalize={"none"}
              autoComplete={"email"}
              secure={false}
            />
            <Input
              placeholder={"Password"}
              inputMode={"text"}
              autoCapitalize={"none"}
              autoComplete={"off"}
              secure
            />
          </View>
        </View>
        <View className="w-full items-center gap-5">
          <SubmitButton text={"Sign In"} />
          <RedirectLink text={"No account ? Register !"} screen={"/auth/signup"} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;
