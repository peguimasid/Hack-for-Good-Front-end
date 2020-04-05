import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, ActivityIndicator } from "react-native";
const AppStack = createStackNavigator();

import Entry from "./pages/Entry";
import CellPhone from "./pages/CellPhone";
import ConfirmCode from "./pages/ConfirmCode";
import Name from "./pages/Name";
import Main from "./pages/Main";
import NewsAndFakeNews from "./pages/NewsAndFakeNews";
import Symptoms from './pages/Symptoms';
import Doubts from './pages/Doubts';
import QuarantineHelp from './pages/QuarantineHelp';
import PostToHelp from './pages/PostToHelp';

const AppContainer = signed => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={signed ? "Main" : "Entry"}
      >
        <AppStack.Screen name="Entry" component={Entry} />
        <AppStack.Screen name="Cellphone" component={CellPhone} />
        <AppStack.Screen name="Confirmcode" component={ConfirmCode} />
        <AppStack.Screen name="Name" component={Name} />
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="NewsAndFakeNews" component={NewsAndFakeNews} />
        <AppStack.Screen name="Symptoms" component={Symptoms}/>
        <AppStack.Screen name="Doubts" component={Doubts}/>
        <AppStack.Screen name="QuarantineHelp" component={QuarantineHelp}/>                
        <AppStack.Screen name="PostToHelp" component={PostToHelp}/>        

      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default function Routes({ signed, loading }) {
  return loading ? (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    AppContainer(signed)
  );
}
