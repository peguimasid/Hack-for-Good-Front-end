import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  AsyncStorage
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as MailComposer from 'expo-mail-composer';

import styles from "./styles";

import symptomsImg from "./assets/medical.png";
import quarantineImg from "./assets/stuck.png";
import doubtImg from "./assets/doubt.png";
import paperImg from "./assets/paper.png";

export default function Main() {
  const [name, setName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    async function loadName() {
      const profile = JSON.parse(await AsyncStorage.getItem("Profile"));
      setName(profile.name);
    }
    loadName();
  }, []);

  function navigateToNewsAndFakeNewsPage() {
    navigation.navigate("NewsAndFakeNews");
  }

  function navigateToSymptomsPage() {
    navigation.navigate("Symptoms");
  }

  function navigateToDoubtsPage() {
    navigation.navigate("Doubts");
  }

  function navigateToQuarantineHelpPage() {
    navigation.navigate("QuarantineHelp");
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Tenho duvidas sobre o aplicativo',
      recipients: ['guilhermomasid@gmail.com']
    })
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.helloText}>Olá, {name}</Text>
        <Text style={styles.title}>Como podemos ajudar?</Text>
        <View style={styles.containerLine1}>
          <TouchableOpacity onPress={navigateToSymptomsPage}>
            <View style={styles.box1}>
              <Image style={styles.medicalImg} source={symptomsImg} />
              <View style={styles.symptomsTexts}>
                <Text style={styles.symptomsTitle}>Sintomas</Text>
                <Text style={styles.symptomsDescription}>
                  Apresento sintomas
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={navigateToQuarantineHelpPage}>
            <View style={styles.box2}>
              <Image style={styles.fishImg} source={quarantineImg} />
              <View style={styles.quarantineTexts}>
                <Text style={styles.quarantineTitle}>Quarentena</Text>
                <Text style={styles.quarantineDescription}>Nāo posso sair</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerLine2}>
        <TouchableOpacity onPress={navigateToDoubtsPage}>
          <View style={styles.box3}>
            <Image style={styles.doubtImg} source={doubtImg} />
            <View style={styles.symptomsTexts}>
              <Text style={styles.doubtTitle}>Dúvidas</Text>
              <Text style={styles.doubtDescription}>Nāo sabe o que fazer?</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToNewsAndFakeNewsPage}>
          <View style={styles.box4}>
            <Image style={styles.paperImg} source={paperImg} />
            <View style={styles.paperTexts}>
              <Text style={styles.paperTitle}>Verdades e</Text>
              <Text style={styles.paperTitle2}>Mentiras</Text>
            </View>
          </View>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.action} onPress={sendMail}>
          <Text style={styles.actionText}>Contate nossa equipe</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}
