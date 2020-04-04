import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function Symptoms() {

  const navigation = useNavigation();

  function navigateToMainPage() {
    navigation.navigate('Main');
  }

  return (
  <>

    <View style={styles.header}>
    <TouchableOpacity onPress={navigateToMainPage}>
        <View style={styles.headerContent}>
          <Icon name="chevron-left" size={35} color="#fff"/>
          <Text style={styles.headerText}>Voltar</Text>
        </View>
        </TouchableOpacity>
    </View>

<ScrollView>
    <View style={styles.containerAll}>

    <Text style={styles.comumTitleOne}>Sintomas comuns:</Text>
    <Text style={styles.comumDescription}>Evite ao máximo sair de casa se estiver com algum desses sintomas.</Text>
    <View style={styles.container}>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Febre</Text>
        <View style={styles.dangerRed}></View>
      </View>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Cansaço</Text>
        <View style={styles.dangerRed}></View>
      </View>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Tosse Seca</Text>
        <View style={styles.dangerRed}></View>
      </View>
      <Text style={styles.comumAlert}>Se você for idoso e estiver com algum desses sitomas procure ajuda médica</Text>
    </View>

    <Text style={styles.comumTitle}>Sintomas menos comuns:</Text>
    <Text style={styles.lessComumDescription}>Esses sintomas sāo leves e começam gradualmente.</Text>

    <View style={styles.container}>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Dores</Text>
        <View style={styles.dangerYellow}></View>
      </View>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Congestāo Nasal</Text>
        <View style={styles.dangerYellow}></View>
      </View>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Dor de Garganta</Text>
        <View style={styles.dangerYellow}></View>
      </View>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Diarréia</Text>
        <View style={styles.dangerYellow}></View>
      </View>
    </View>

    <Text style={styles.comumTitle}>Sintoma crítico:</Text>

    <View style={styles.container}>
      <View style={styles.comum}>
        <Text style={styles.symptom}>Dificuldade de respirar</Text>
        <View style={styles.dangerBigRed}></View>
      </View>
        <Text style={styles.comumAlert}>Se estiver com dificuldade para respirar, ligue para <Text style={styles.emergencyNumber}>193</Text> e solicite ajuda médica</Text>
    </View>
  </View>
</ScrollView>
  </>
  );
}
