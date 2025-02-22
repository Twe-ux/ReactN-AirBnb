import '../global.css';

import { Button, View } from 'react-native';
import { router } from 'expo-router';

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Button
        title="login"
        onPress={() => {
          router.navigate('/auth/login');
        }}
      />
      <Button
        title="signup"
        onPress={() => {
          router.navigate('/auth/signup');
        }}
      />
      <Button
        title="home"
        onPress={() => {
          router.navigate('/main/home/home');
        }}
      />
      <Button
        title="room"
        onPress={() => {
          router.navigate('/main/home/room');
        }}
      />
      <Button
        title="map"
        onPress={() => {
          router.navigate('/main/map');
        }}
      />
      <Button
        title="profile"
        onPress={() => {
          router.navigate('/main/profile');
        }}
      />
    </View>
  );
};

export default Index;
