import { TextInput, StyleSheet } from "react-native";
import colors from "../assets/styles/colors";

export default function Input({
  placeholder,
  autoComplete,
  inputMode,
  secure,
  autoCapitalize,
  setState,
}) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      inputMode={inputMode}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      secureTextEntry={secure}
      onChangeText={setState}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    padding: 5,
    fontSize: 16,
  },
});
