import { Text, View, Image, StyleSheet } from "react-native";

export default function PictureAppartement({ item, room }) {
  return room ? (
    <View>
      <Image
        source={{ uri: `${item.url}` }}
        resizeMode="stretch"
        style={room ? styles.roomPict : styles.homePict}
      />
    </View>
  ) : (
    <View>
      <Image
        source={{ uri: `${item.photos[0].url}` }}
        resizeMode="cover"
        style={room ? styles.roomPict : styles.homePict}
      />
      <View className="absolute bottom-4 h-14 w-24 items-center justify-center bg-slate-800">
        <Text className="text-xl text-white">{item.price} €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homePict: {
    width: "100%",
    height: 180,
  },
  roomPict: {
    width: "100%",
    height: "100%",
  },
});
