import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ForecastWeatherInfo } from './ForecastWeatherInfo'
import { METRICS } from '../constants/index';

type Props = {
    forecastWeather: [Daily];
}

export const DailyForecast: React.FC<Props> = ({ forecastWeather }) => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContentContainer}>
          {forecastWeather.map((item, index) =>
            index ?
            (<ForecastWeatherInfo key={item.dt} forecastWeather={item}/>) : null)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',  
  },
  scrollViewContainer: {
    maxHeight: METRICS.screenHeight * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})