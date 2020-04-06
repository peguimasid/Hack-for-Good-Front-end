import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Linking,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import api from "../../services/api";

import styles from "./styles";

export default function QuarantineHelp() {
  const [loadingPage, setLoadingPage] = useState(false);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [helps, setHelps] = useState([]);
  const navigation = useNavigation();

  const message =
    "Olá, vi sua postagem no Conecte|Me e gostaria de ajudar você, como acha que seria a melhor forma para eu te auxiliar?";

  async function loadHelp() {
    try {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude
        });
        if (loadingPage) {
          return;
        }
        if (total > 0 && helps.length === total) {
          return;
        }
        setLoadingPage(true);
        const { token } = JSON.parse(await AsyncStorage.getItem("Profile"));

        const response = await api.get("help", {
          headers: {
            Authorization: `Barear ${token}`
          },
          params: {
            latitude,
            longitude,
            page
          }
        });
        setHelps([...helps, ...response.data]);
        setTotal(response.headers["x-total-count"]);
        setPage(page + 1);
        setLoading(false);
        setLoadingPage(false);
      } else {
        Alert.alert(
          "Permissão necessária",
          "O aplicativo requer permissão ao GPS"
        );
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    loadHelp();
  }, []);

  async function refreshList() {
    setLoading(true);
    const { token } = JSON.parse(await AsyncStorage.getItem("Profile"));
    const response = await api.get("help", {
      headers: {
        Authorization: `Barear ${token}`
      },
      params: currentRegion
    });
    setHelps(response.data);
    setLoading(false);
  }

  function navigateToMainPage() {
    navigation.navigate("Main");
  }

  function navigateToPostToHelpPage() {
    navigation.navigate("PostToHelp");
  }

  function sendWhatsapp(help) {
    Linking.openURL(`whatsapp://send?phone=+55${help.phone}&text=${message}`);
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToMainPage}>
          <View style={styles.back}>
            <Icon name="chevron-left" size={32} color="#333" />
            <Text style={styles.backTitle}>Voltar</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.addHelp}>
          <TouchableOpacity onPress={navigateToPostToHelpPage}>
            <Icon name="plus" size={32} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={helps}
        refreshing={loading}
        onRefresh={refreshList}
        onEndReached={loadHelp}
        onEndReachedThreshold={0.2}
        style={styles.postsContainer}
        keyExtractor={help => String(help.id)}
        renderItem={({ item: help }) => (
          <View style={styles.helpList}>
            <View style={styles.help}>
              <View>
                <Text style={styles.helpTitle}>{help.title}</Text>
                <Text style={styles.helpDescription}>{help.description}</Text>
              </View>
            </View>

            <View style={styles.contactHelp}>
              <TouchableOpacity onPress={() => sendWhatsapp(help)}>
                <Icon name="comments" size={32} color="#4f4f4f" />
              </TouchableOpacity>
              <Text style={styles.distance}> +/- {help.distance} \Km</Text>
            </View>
          </View>
        )}
      />
    </>
  );
}
