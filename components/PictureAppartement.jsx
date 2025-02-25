import { Text, View, Image } from "react-native";

export default function PictureAppartement({ item }) {
  return (
    <View>
      <Image className="h-52 w-full" source={{ uri: `${item.photos[0].url}` }} resizeMode="cover" />
      <View className="absolute bottom-4 h-14 w-24 items-center justify-center bg-slate-800">
        <Text className="text-xl text-white">{item.price} €</Text>
      </View>
    </View>
  );
}
