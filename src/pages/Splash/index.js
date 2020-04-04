import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

// import { Container } from './styles';

export default function Splash() {
  return (
    <View style={styles.container}>
      <ActivityIncicator size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
