import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

export default function Name() {
  const navigation = useNavigation();

  function navigateToMainPage() {
    navigation.navigate('Main');
  }

  const DimissKeybord = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (
    <DimissKeybord>
    <View style={styles.container}>

      <Text style={styles.title}>Parabéns!!Agora falta apenas o seu nome</Text>

        <TextInput 
          style={styles.input}
          keyboardType='default'
          placeholder="Nome..."
          placeholderTextColor="rgba(160, 160, 160, 0.9)"
          maxLength={20}
        />
        <View style={styles.borderBottomInput} />

      <TouchableOpacity onPress={navigateToMainPage} style={styles.button}>
        <Text style={styles.textButton}>CONCLUIR</Text>
      </TouchableOpacity>

    </View>
    </DimissKeybord>
  );
}
