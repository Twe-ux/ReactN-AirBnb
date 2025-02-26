import axios from "axios";
import { View, Text, SafeAreaView, ActivityIndicator, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import colors from "../../../assets/styles/colors";
import Octicons from "@expo/vector-icons/Octicons";
import Swiper from "react-native-swiper";
import MapView, { Marker } from "react-native-maps";

import { PictureAppartement, InfoContainer } from "../../../components/index";

const Room = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [fullDescription, setFullDescription] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  console.log(data);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const announcementRoom = async () => {
      // await new Promise((r) => setTimeout(r, 200));
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms/${id}`
        );
        setData(response.data);

        setIsLoading(false);
        setLatitude(response.data.location[1]);
        setLongitude(response.data.location[0]);
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
    <View className="flex-1">
      <Swiper style={styles.wrapper} activeDotColor={colors.pink}>
        {data.photos.map((pict, id) => {
          return <PictureAppartement key={pict.picture_id} item={pict} room />;
        })}
      </Swiper>
      <View className="">
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
                <View className="flex-row items-center gap-2">
                  <Text className="text-xl" style={styles.textShow}>
                    Show less
                  </Text>
                  <Octicons style={styles.textShow} name="triangle-up" size={30} />
                </View>
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
                <View className="flex-row items-center gap-2">
                  <Text className="text-xl" style={styles.textShow}>
                    Show more
                  </Text>
                  <Octicons style={styles.textShow} name="triangle-down" size={30} />
                </View>
              </Pressable>
            </>
          )}
        </View>
      </View>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          // title={marker.title}
          // description={marker.description}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  textShow: {
    fontWeight: "bold",
    color: colors.grey,
  },
  wrapper: {},
});

export default Room;
