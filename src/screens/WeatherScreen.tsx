import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';

// components
import { getCurrentWeather } from '../components/WeatherService';
import CurrentWeather from '../components/CurrentWeather';

export default function WeatherScreen() {

  const [current, setCurrent] = useState<CurrentWeather>({ main: '', iconURL: '' });

  useEffect(() => {
    getCurrentWeather('Tokyo')
      .then((current) => {
        console.log(current);
        setCurrent(current);
      });
  }, []);

  const { main, iconURL } = current;

  if (main == '') {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{main}</Text>
      <Image source={{ uri: iconURL }} style={styles.icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
  },
  icon: {
    width: 100,
    height: 100,
  },
});