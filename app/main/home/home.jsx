import axios from "axios";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, FlatList, ActivityIndicator, View, Image, Text } from "react-native";

import colors from "../../../assets/styles/colors";
import RatingValue from "../../../components/RatingValue";

const Home = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const announcementList = async () => {
      // await new Promise((r) => setTimeout(r, 500));

      try {
        setIsLoading(false);
        const response = await axios.get(
          "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    announcementList();
  }, []);

  // console.log(data[0].ratingValue);

  return isLoading ? (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.pink} />
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={data}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 2,
                backgroundColor: colors.lightGrey,
                marginRight: 20,
                marginLeft: 20,
              }}></View>
          );
        }}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => {
          return (
            <Link href={"/main/home/room"}>
              <View className="w-full p-5">
                <View>
                  <Image
                    className="h-52 w-full"
                    source={{ uri: `${item.photos[0].url}` }}
                    resizeMode="cover"
                  />
                  <View className="absolute bottom-4 h-14 w-24 items-center justify-center bg-slate-800">
                    <Text className="text-xl text-white">{item.price} €</Text>
                  </View>
                </View>

                <View className="h-24 flex-row items-end justify-between">
                  <View className="mb-2 gap-4">
                    <Text numberOfLines={1} ellipsizeMode="tail" className="w-72 text-xl">
                      {item.title}
                    </Text>
                    <RatingValue ratingValue={item.ratingValue} reviews={item.reviews} />
                  </View>
                  <Image
                    className="h-20 w-20 rounded-full"
                    source={{ uri: `${item.user.account.photo.url}` }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </Link>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
