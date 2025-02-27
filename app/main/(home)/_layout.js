import { Stack } from "expo-router";
import colors from "../../../assets/styles/colors";
import { StatusLogo } from "../../../components";
import { router } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackButtonDisplayMode: "minimal",
        headerTintColor: colors.pink,
      }}>
      <Stack.Screen
        name="home"
        options={{
          headerTitle: () => <StatusLogo />,
        }}
      />
      <Stack.Screen
        name="room"
        options={{
          headerTitle: () => <StatusLogo />,
        }}
      />
    </Stack>
  );
}
