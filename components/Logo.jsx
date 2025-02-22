import { Image, StyleSheet, Text } from 'react-native';
import logo from '../assets/logo.png';

export default function Logo() {
  return <Image style={styles.logo} source={logo} resizeMode="contain" />;
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
