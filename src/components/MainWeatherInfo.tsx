import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { METRICS, FONT, COLORS } from '../constants/index';

type Props = {
    currentWeather: Current;
    locality: string;
}

export const MainWeatherInfo: React.FC<Props> = ({ currentWeather, locality }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.localityText}>{locality}</Text>
      <View style={styles.iconListContainer}>
        {currentWeather.weather.map(item => 
        (<View key={item.id} style={styles.container}>
          <Image style={styles.image}
            source={{
            uri: `http://openweathermap.org/img/wn/${item.icon}@2x.png`,
            }}/>
          <Text style={styles.weatherText}>{item.main}</Text>
        </View>))}
      </View>
      <Text style={styles.tempText}>{currentWeather.temp} &#8451;</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: METRICS.bigIcon,
    height: METRICS.bigIcon,
  },
  localityText: {
    margin: 10,
    fontSize: FONT.extraLarge,
    color: COLORS.textColor,
  },
  tempText: {
    margin: 10,
    fontSize: FONT.large,
    color: COLORS.tempColor,
  },
  weatherText: {
    fontSize: FONT.mediumSmall,
    color: COLORS.textColor,
  },
})