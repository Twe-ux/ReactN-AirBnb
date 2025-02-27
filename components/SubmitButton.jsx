import { Text, Pressable, StyleSheet } from "react-native";
import colors from "../assets/styles/colors";

export default function SubmitButton({ text, onPressFunc, isLoading, logout }) {
  return (
    <Pressable
      style={logout ? styles.buttonLogout : styles.button}
      onPress={onPressFunc}
      disabled={isLoading}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
  },
  buttonLogout: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
    backgroundColor: colors.mediumGrey,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});
