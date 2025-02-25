import { Image } from "react-native";

export default function PictureUser({ item }) {
  return (
    <Image
      className="h-20 w-20 rounded-full"
      source={{ uri: `${item.user.account.photo.url}` }}
      resizeMode="cover"
    />
  );
}
