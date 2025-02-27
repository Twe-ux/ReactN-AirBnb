import { Image, StyleSheet } from "react-native";
import logo from "../assets/logo.png";

export default function StatusLogo() {
  return <Image style={styles.logo} source={logo} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 5,
    width: 35,
    height: 35,
  },
});
