import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <View>
      <Image style={styles.logo} source={logo} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
