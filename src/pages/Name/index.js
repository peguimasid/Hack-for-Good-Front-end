import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Alert, View ,KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback} from 'react-native';
import api from '../../services/api'
import styles from './styles';

export default function Name(props) {
  const [name,setName] = useState('')
  const navigation = useNavigation();

  const {phone, code} = props.route.params

  async function navigateToMainPage() {
    try {
      const response = await api.post('sessions',{
        phone,
        name,
        code
      })
      const {token,name} = response.data
      localStorage.setItem('Profile',{
       token,
       name 
      })
      navigation.navigate('Main');
    } catch (error) {
      Alert.alert('Erro','Não foi possível acessar a aplicação')
    }
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.Os == "ios" ? "padding" : "height"}
    style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
      <Text style={styles.title}>Parabéns!!Agora falta apenas o seu nome</Text>

        <TextInput 
          style={styles.input}
          keyboardType='default'
          placeholder="Nome..."
          placeholderTextColor="rgba(160, 160, 160, 0.9)"
          onChangeText={setName}
          value={name}
          maxLength={20}
        />
        <View style={styles.borderBottomInput} />

      <TouchableOpacity onPress={navigateToMainPage} style={styles.button}>
        <Text style={styles.textButton}>CONCLUIR</Text>
      </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
