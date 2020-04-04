import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  Alert,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import api from "../../services/api";
import styles from "./styles";

export default function ConfirmCode(props) {
  const [code, setCode] = useState("");
  const { cellPhone } = props.route.params;
  const navigation = useNavigation();

  function navigateToCellphonePage() {
    navigation.navigate("Cellphone");
  }

  async function navigateToNamePage() {
    try {
      if (!code || code < 7) {
        Alert.alert("Erro", "Por favor informe um código válido");
        return;
      }
      await api.post("/code", {
        phone: cellPhone,
        code
      });
      navigation.navigate("Name", {
        phone: cellPhone,
        code
      });
    } catch (error) {
      Alert.alert("Erro", error.response.data.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.Os == "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={styles.title}>Código de Verificação</Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 1064155"
            placeholderTextColor="rgba(255, 255, 255, 0.8)"
            onChangeText={setCode}
            value={code}
            maxLength={7}
          />
          <View style={styles.borderBottomInput} />

          <TouchableOpacity onPress={navigateToNamePage} style={styles.button}>
            <Text style={styles.textButton}>AVANÇAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateToCellphonePage}
            style={styles.backButton}
          >
            <Text style={styles.textButtonBack}>Nāo recebeu o código?</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
