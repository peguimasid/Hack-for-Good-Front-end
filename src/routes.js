import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Entry from './pages/Entry';
import CellPhone from './pages/CellPhone';
import ConfirmCode from './pages/ConfirmCode';
import Name from './pages/Name';
import Main from './pages/Main';
import NewsAndFakeNews from './pages/NewsAndFakeNews';
import Symptoms from './pages/Symptoms';

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Entry" component={Entry}/>
        <AppStack.Screen name="Cellphone" component={CellPhone}/>
        <AppStack.Screen name="Confirmcode" component={ConfirmCode}/>
        <AppStack.Screen name="Name" component={Name}/>
        <AppStack.Screen name="Main" component={Main}/>
        <AppStack.Screen name="NewsAndFakeNews" component={NewsAndFakeNews}/>
        <AppStack.Screen name="Symptoms" component={Symptoms}/>
      </AppStack.Navigator>

    </NavigationContainer>
  );
}