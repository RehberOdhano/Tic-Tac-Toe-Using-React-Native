import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GameScreen from './GameScreen';

export default function App() {

  return (
    <View style={styles.container}>
      <GameScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8D2E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
