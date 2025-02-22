import '../global.css';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <StatusBar style="dark" />
      <Text className="font-bold">Bienvenue sur ma config with Tailwind !! </Text>
    </View>
  );
}
