import { TextInput, StyleSheet } from "react-native";
import colors from "../assets/styles/colors";

export default function InputLarge({ placeholder, inputMode }) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      inputMode={"text"}
      autoComplete={"off"}
      multiline={true}
      numberOfLines={10}
      maxLength={250}
    />
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.lightPink,
    borderWidth: 2,
    marginTop: 10,
    fontSize: 16,
    height: 100,
    padding: 10,
  },
});
