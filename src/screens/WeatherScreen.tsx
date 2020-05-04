import React, { useEffect } from 'react';
import { View } from 'react-native';

// components
import { getCurrentWeather } from '../components/WeatherService';

export default function WeatherScreen() {

  useEffect(() => {
    getCurrentWeather('Tokyo')
      .then((current) => { console.log(current) });
  })

  return (
    <View></View>
  );
}