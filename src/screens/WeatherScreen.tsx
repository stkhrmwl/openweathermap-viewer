import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

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

  if (current == null) {
    return (<View style={styles.container}><ActivityIndicator /></View>);
  }

  return (
    <View style={styles.container}>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
  },
});