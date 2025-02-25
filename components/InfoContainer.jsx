import { View, Text } from "react-native";
import { RatingValue, PictureUser } from "./index";

export default function InfoContainer({ item }) {
  return (
    <View className="h-24 flex-row items-end justify-between">
      <View className="mb-2 gap-2">
        <Text numberOfLines={1} ellipsizeMode="tail" className="w-80 text-xl">
          {item.title}
        </Text>
        <RatingValue item={item} />
      </View>
      <PictureUser item={item} />
    </View>
  );
}
