import { SafeAreaView, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, InputLarge, Logo, Title, SubmitButton, RedirectLink } from "../../components/index";

export default function Signup() {
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
          <Title text={"Sign Up"} />
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
              placeholder={"Username"}
              inputMode={"text"}
              autoCapitalize={"none"}
              autoComplete={"off"}
              secure={false}
            />
            <InputLarge placeholder={"Describe yourself in a few words ..."} />

            <Input
              placeholder={"Password"}
              inputMode={"text"}
              autoCapitalize={"none"}
              autoComplete={"off"}
              secure
            />
            <Input
              placeholder={"Confirm password"}
              inputMode={"text"}
              autoCapitalize={"none"}
              autoComplete={"off"}
              secure
            />
          </View>
        </View>
        <View className="w-full items-center gap-5">
          <SubmitButton text={"Sign Up"} />
          <RedirectLink text={"Already have an account ? Login !"} screen={"/auth/login"} />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
