import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

export default function ConfirmCode({cellPhone}) {
  console.log(cellPhone);
  const navigation = useNavigation();

  function navigateToCellphonePage() {
    navigation.navigate('Cellphone');
  }

  function navigateToNamePage() {
    navigation.navigate('Name');
  }

  const DimissKeybord = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (
    <DimissKeybord>
    <View style={styles.container}>

      <Text style={styles.title}>Código de Verificação</Text>

        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ex: 1064155"
          placeholderTextColor="rgba(255, 255, 255, 0.8)"
          maxLength={7}
        />
        <View style={styles.borderBottomInput} />

      <TouchableOpacity onPress={navigateToNamePage} style={styles.button}>
        <Text style={styles.textButton}>AVANÇAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToCellphonePage} style={styles.backButton}>
        <Text style={styles.textButtonBack}>Nāo recebeu o código?</Text>
      </TouchableOpacity>

    </View>
    </DimissKeybord>
  );
}
