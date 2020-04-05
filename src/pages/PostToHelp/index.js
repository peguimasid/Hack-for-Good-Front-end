import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  AsyncStorage,
  Alert
} from "react-native";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";
import { useNavigation } from "@react-navigation/native";

import api from "../../services/api";
import styles from "./styles";

export default function PostToHelp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [currentRegion, setCurrentRegion] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function getCurrentPosition() {
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
      }
    }
    getCurrentPosition();
  }, []);

  function navigateToHelpPosts() {
    navigation.navigate("QuarantineHelp");
  }
  async function handleSubmitHelp() {
    try {
      if (title === "" || description === "") {
        Alert.alert("Erro", "Preencha todos os dados");
        return;
      }
      const { token } = JSON.parse(await AsyncStorage.getItem("Profile"));
      await api.post(
        "help",
        {
          title,
          description,
          latitude: currentRegion.latitude,
          longitude: currentRegion.longitude
        },
        {
          headers: {
            Authorization: `Barear ${token}`
          }
        }
      );
      Alert.alert("Sucesso!", "Solicitação cadastrada com sucesso!");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.postTitle}>
          <Text style={styles.title}>O que você precisa ?</Text>
          <TextInput
            style={styles.input}
            placeholder="Título..."
            onChangeText={setTitle}
            value={title}
          />
        </View>

        <View style={styles.postDescription}>
          <Text style={styles.title}>Como podemos ajudá-lo ?</Text>
          <TextInput
            style={styles.inputDescription}
            placeholder="Descriçāo..."
            onChangeText={setDescription}
            value={description}
          />
        </View>

        <TouchableOpacity onPress={handleSubmitHelp}>
          <View style={styles.button}>
            <Text style={styles.buttonTextSend}>ENVIAR</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToHelpPosts}>
          <View style={styles.buttonBack}>
            <Text style={styles.buttonText}>Voltar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
