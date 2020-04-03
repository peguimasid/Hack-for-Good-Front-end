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
    </View>

    <Text style={styles.comumTitle}>Sintomas menos comuns:</Text>
    <Text style={styles.comumDescription}>Esses sintomas sāo leves e começam gradualmente.</Text>

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
        <Text style={styles.symptom}>Diarreia</Text>
        <View style={styles.dangerYellow}></View>
      </View>
    </View>
  </View>
</ScrollView>
  </>
  );
}
