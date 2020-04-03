import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, Keyboard,Platform, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';

export default function CellPhone() {
  const [cellPhone, setCellPhone] = useState('');
  const navigation = useNavigation();

  function navigateToEntryPage() {
    navigation.navigate('Entry');
  }

  function navigateToConfirmCodePage() {
    try {
      
      navigation.navigate('Confirmcode',{
        cellPhone
      })
    } catch (error){

    } 
  }

  // const DimissKeybord = ({ children }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // )

  return (
    // <DimissKeybord>
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
