import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FONT, COLORS } from '../constants/index';

type Props = {
    currentWeather: Current;
}

function getTimeFromDate(dt: number): string {
  const date = new Date(dt * 1000);
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
  return `${date.getHours()}:${minutes}`;
}

export const WeatherDetails: React.FC<Props> = ({ currentWeather }) => {
  const sunrise = getTimeFromDate(currentWeather.sunrise);
  const sunset = getTimeFromDate(currentWeather.sunset);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Sunrise: {sunrise}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Sunset: {sunset}</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Temp.: {currentWeather.temp} &#8451;</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Feels like: {currentWeather.feels_like} &#8451;</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Pressure: {currentWeather.pressure} hPa</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Humidity: {currentWeather.humidity}%</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Cloudiness: {currentWeather.clouds}%</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>UV index: {currentWeather.uvi}</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Visibility: {currentWeather.visibility/1000} km</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.detailText}>Wind speed: {currentWeather.wind_speed} m/s</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: COLORS.textColor,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  detailText: {
    fontSize: FONT.small,
    color: COLORS.textColor,
  },
})