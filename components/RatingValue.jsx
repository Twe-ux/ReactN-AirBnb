import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "../assets/styles/colors";

export default function RatingValue({ ratingValue, reviews }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    // if (i < ratingValue) {
    //   stars.push(<AntDesign key={i} name="star" size={24} color={colors.pink} />);
    // } else {
    //   stars.push(<AntDesign key={i} name="staro" size={24} color={colors.pink} />);
    // }

    // Get the icon to show.
    let name = "staro";
    if (i < ratingValue) {
      name = "star";
    }
    // Render the icon.
    stars.push(<AntDesign key={i} name={name} size={24} color={colors.pink} />);
  }

  return (
    <View className="flex-row items-center gap-2">
      <View className="flex-row">{stars}</View>

      <Text className="text-xl" style={{ color: colors.mediumGrey }}>
        {reviews} reviews
      </Text>
    </View>
  );
}
