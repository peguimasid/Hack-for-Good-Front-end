import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Text, View, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function CellPhone() {


  const [cellPhone, setCellPhone] = useState('');

  const navigation = useNavigation();

  function navigateToEntryPage() {
    navigation.navigate('Entry');
  }

  // async function handleTextInput(e){
  //   e.preventDefault();

  //   try {
  //     await api.post('sms', {
  //       phone: cellPhone
  //     })
  //   }
  //   catch(err) {
  //     console.log(err);
  //   }
  // }

  async function navigateToConfirmCodePage() {
    // try{
    //   await api.post('/sms',{
    //     phone: cellPhone
    //   })
      navigation.navigate('Confirmcode',{
        cellPhone
      })
    // }catch(error){
    //   Alert('Erro','Houve um erro ao tentar realizar a requisição')
    // }
  }

  const DimissKeybord = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  )

  return (
    <DimissKeybord>
    <View style={styles.container}>

      <Text style={styles.title}>Digite seu número de celular</Text>

        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          placeholder="(31) 989898989"
          placeholderTextColor="rgba(255, 255, 255, 0.8)"
          maxLength={11}
          onChangeText={setCellPhone}
          value={cellPhone}
        />
        <View style={styles.borderBottomInput} />

      <TouchableOpacity onPress={navigateToConfirmCodePage} style={styles.button}>
        <Text style={styles.textButton}>AVANÇAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToEntryPage} style={styles.backButton}>
        <Text style={styles.textButtonBack}>Voltar</Text>
      </TouchableOpacity>

    </View>
    </DimissKeybord>
  );
}
