import axios from "axios";
import { View, Image, Text, SafeAreaView, ActivityIndicator, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import colors from "../../../assets/styles/colors";

import { PictureAppartement, InfoContainer } from "../../../components/index";

const Room = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fullDescription, setFullDescription] = useState(false);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const announcementRoom = async () => {
      // await new Promise((r) => setTimeout(r, 1000));
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    announcementRoom();
  }, []);

  return isLoading ? (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.pink} />
      </View>
    </SafeAreaView>
  ) : (
    <View>
      <PictureAppartement item={data} room />
      <View className="gap-5 p-5">
        <InfoContainer item={data} />
        {fullDescription ? (
          <>
            <Text numberOfLines={0}>{data.description}</Text>
            <Pressable
              className="gap-2"
              onPress={() => {
                setFullDescription(false);
              }}>
              <Text className="font-bold">Show less - </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Text numberOfLines={3}>{data.description}</Text>
            <Pressable
              className="gap-2"
              onPress={() => {
                setFullDescription(true);
              }}>
              <Text className="font-bold">Show more + </Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};

export default Room;
