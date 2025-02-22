import { Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import colors from '../assets/styles/colors';

export default function RedirectLink({ text, screen }) {
  return (
    <Pressable
      onPress={() => {
        router.replace(screen);
      }}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
  },
});
