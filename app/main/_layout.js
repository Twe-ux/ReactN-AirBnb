import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../assets/styles/colors";
import { StatusLogo } from "../../components";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.pink,
        headerShown: true,
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Arround me",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-map-marker" size={24} color={color} />
          ),
          headerTitle: () => <StatusLogo />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          headerTitle: () => <StatusLogo />,
        }}
      />
    </Tabs>
  );
}

{
  /* <AntDesign name="home" size={24} color="black" />; */
  // <MaterialCommunityIcons name="home-map-marker" size={24} color="black" />;
  // <AntDesign name="user" size={24} color="black" />;
}
