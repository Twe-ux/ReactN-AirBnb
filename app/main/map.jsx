import axios from "axios";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import { SafeAreaView, View, ActivityIndicator, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
//Style
import colors from "../../assets/styles/colors";
import { SubmitButton } from "../../components";

const Map = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMap, setIsLoadingMap] = useState(true);
  // console.log(data);

  const [error, setError] = useState();
  const [coords, setCoords] = useState();

  useEffect(() => {
    const askPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      // console.log(status);
      if (status === "granted") {
        let location = await Location.getCurrentPositionAsync({});
        // console.log("location =>", location); // console.log permettant de visualiser l'objet obtenu
        const obj = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };
        setCoords(obj);
      } else {
        setError(true);
      }
      setIsLoadingMap(false);
    };
    askPermission();
  }, []);

  useEffect(() => {
    const markersList = async () => {
      await new Promise((r) => setTimeout(r, 200));
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/rooms`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    markersList();
  }, []);

  return isLoadingMap ? (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.pink} />
      </View>
    </SafeAreaView>
  ) : error ? (
    <SafeAreaView className="flex-1 items-center justify-center">
      <SubmitButton text={"Permission refusé"} onPressFunc={() => router.push("./home")} />
    </SafeAreaView>
  ) : isLoading ? (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color={colors.pink} />
      </View>
    </SafeAreaView>
  ) : (
    <SafeAreaView className="flex-1">
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        showsUserLocation={true}>
        {data.map((marker) => {
          return (
            <Marker
              key={marker._id}
              coordinate={{
                latitude: marker.location[1],
                longitude: marker.location[0],
              }}
              title={String(marker.title)}
              description={`${String(marker.price)}€`}
              onPress={() => {
                router.push({
                  pathname: "./room",
                  params: { id: marker._id },
                });
              }}
            />
          );
        })}
      </MapView>
    </SafeAreaView>
  );
};

export default Map;
