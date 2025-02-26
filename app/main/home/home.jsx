import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  Image,
  Text,
  Pressable,
} from "react-native";

import colors from "../../../assets/styles/colors";

import {
  InfoContainer,
  PictureAppartement,
  RatingValue,
  PictureUser,
} from "../../../components/index";

const Home = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const announcementList = async () => {
      // await new Promise((r) => setTimeout(r, 500));

      try {
        setIsLoading(true);
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

  // console.log(data);

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
          // console.log(item.photos[0].url);

          return (
            // <Link href={"/main/home/room"}>
            <Pressable
              onPress={() => {
                router.push({
                  pathname: "/main/home/room",
                  params: { id: item._id },
                });
              }}>
              <View className="w-full p-5">
                <PictureAppartement item={item} />
                <InfoContainer item={item} />
              </View>
            </Pressable>

            // </Link>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
