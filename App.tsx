import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// components
import WeatherScreen from './src/screens/WeatherScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
