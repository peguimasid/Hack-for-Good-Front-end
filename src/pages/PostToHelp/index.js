import React from 'react';
import { View , Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function PostToHelp() {
  const navigation = useNavigation();

  function navigateToHelpPosts() {
    navigation.navigate("QuarantineHelp")
  }

  return (
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>

      <View style={styles.postTitle}>
        <Text style={styles.title}>O que você precisa ?</Text>
        <TextInput style={styles.input} placeholder="Título..."/>
      </View>

      <View style={styles.postDescription}>
        <Text style={styles.title}>Como podemos ajudá-lo ?</Text>
        <TextInput style={styles.inputDescription} placeholder="Descriçāo..." />
      </View>

      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttonTextSend}>ENVIAR</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateToHelpPosts}>
        <View style={styles.buttonBack}>
          <Text style={styles.buttonText}>Voltar</Text>
        </View>
      </TouchableOpacity>

    </View>
    </TouchableWithoutFeedback>
  );
}
