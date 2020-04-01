import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Entry() {
  const navigation = useNavigation();

  function navigateToCellphonePage() {
    navigation.navigate('Cellphone');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos juntos vencer mais essa batalha</Text>
      <TouchableOpacity onPress={navigateToCellphonePage} style={styles.button}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
