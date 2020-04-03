import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import styles from './styles';

import News from './News'
import FakeNews from './FakeNews';

const Tab = createMaterialTopTabNavigator();

export default function NewsAndFakeNews() {
  const navigation = useNavigation();

  function navigateToMainPage() {
    navigation.navigate('Main');
  }
  return (
    <View style={styles.container}>

    <View style={styles.header}>
        <TouchableOpacity onPress={navigateToMainPage}>
        <View style={styles.headerContent}>
          <Icon name="chevron-left" size={35} color="#fff"/>
          <Text style={styles.headerText}>Voltar</Text>
        </View>
        </TouchableOpacity>
    </View>

    
      <Tab.Navigator>
          <Tab.Screen name="Verdades" component={News} />
          <Tab.Screen name="Fake News"component={FakeNews} />
      </Tab.Navigator>
    </View>
  );
}
