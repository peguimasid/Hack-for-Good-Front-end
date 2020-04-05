import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function QuarantineHelp() {
  const navigation = useNavigation();

  const message = 'Olá, vi sua postagem no Conecte|Me e gostaria de ajudar você, como acha que seria a melhor forma para eu te auxiliar?'

  function navigateToMainPage() {
    navigation.navigate("Main")
  }

  function navigateToPostToHelpPage() {
    navigation.navigate("PostToHelp")
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5524988395623&text=${message}`);
  }

  return (
    <>
    <View style={styles.header}>
    <TouchableOpacity onPress={navigateToMainPage}>
      <View style={styles.back}>
        <Icon name="chevron-left" size={32} color="#333" />
        <Text style={styles.backTitle}>Voltar</Text>
      </View>
    </TouchableOpacity>

      <View style={styles.addHelp}>
        <TouchableOpacity onPress={navigateToPostToHelpPage}>
          <Icon name="plus" size={32} color='#333' />
        </TouchableOpacity>
      </View>
    </View>

    <FlatList 
      data={[1, 2]}
      style={styles.postsContainer}
      keyExtractor={help => String(help)}
      renderItem={() => (
        <View style={styles.helpList}>
        <View style={styles.help}>
          <Text style={styles.helpTitle}>Alguem para ir à farmácia para mim.</Text>
          <Text style={styles.helpDescription}>Preciso que alguem vá à farmacia para mim poir preciso de um remédio para minha doenca, já estou sem à 3 dias.</Text>
        </View>

        <View style={styles.contactHelp}>
          <TouchableOpacity onPress={sendWhatsapp}>
            <Icon name="comments" size={32} color='#4f4f4f' />
          </TouchableOpacity>
          <Text style={styles.distance}> -5 \Km</Text>
        </View>
      </View>
      )}
    />
    </>
  );
}
