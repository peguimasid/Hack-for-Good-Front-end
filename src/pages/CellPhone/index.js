import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text,Alert, View, TouchableOpacity, Keyboard,Platform, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

import api from '../../services/api';

export default function CellPhone() {
  const [cellPhone, setCellPhone] = useState('');

  const navigation = useNavigation();

  function navigateToEntryPage() {
    navigation.navigate('Entry');
  }


  async function navigateToConfirmCodePage() {
    try{
      if(!cellPhone || cellPhone.length < 10){
        Alert.alert('Erro', 'Informe um celular válido')
        return;
      }
      await api.post('/sms',{
        phone: cellPhone
      })
      navigation.navigate('Confirmcode',{
        cellPhone
      })
    }catch(error){
      Alert.alert('Erro','Houve um erro ao tentar realizar a requisição')
    }
  }


  return (
    <KeyboardAvoidingView
    behavior={Platform.Os == "ios" ? "padding" : "height"}
    style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
        <Text style={styles.title}>Digite seu número de celular</Text>
          <TextInput 
            style={styles.input}
            keyboardType="numeric"
            placeholder="31 989898989"
            placeholderTextColor="rgba(255, 255, 255, 0.8)"
            maxLength={11}
            onChangeText={setCellPhone}
            value={cellPhone} 
          />
          <View style={styles.borderBottomInput} />

        <TouchableOpacity onPress={navigateToConfirmCodePage} style={styles.button}>
          <Text style={styles.textButton}>AVANÇAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToEntryPage} style={styles.backButton} >
          <Text style={styles.textButtonBack}>
            Voltar
            </Text>
        </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
