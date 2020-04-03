import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import TextAnimator from '../../components/TextAnimator';

import styles from './styles';

export default function Entry() {
  const navigation = useNavigation();

  function navigateToCellphonePage() {
    navigation.navigate('Cellphone');
  }

  return (
    <View style={styles.container}>
      <TextAnimator
       style={styles.title}
       content='Vamos juntos vencer mais essa batalha'
       duration={1000}
       />
      <TouchableOpacity onPress={navigateToCellphonePage} style={styles.button}>
        <Text style={styles.textButton}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
