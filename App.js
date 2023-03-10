import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginSign from './src/Screen/LoginSign/LoginSign'
import LetGetStarted from './src/Screen/LetsGetStarted/LetGetStarted'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginSign /> */}
      <LetGetStarted />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
