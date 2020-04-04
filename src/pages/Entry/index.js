import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import TextAnimator from '../../components/TextAnimator';

import styles from './styles';
import logo from './assets/logo.png';

export default function Entry() {
  const navigation = useNavigation();

  function navigateToCellphonePage() {
    navigation.navigate('Cellphone');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={logo} />
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
