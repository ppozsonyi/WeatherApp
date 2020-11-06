import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { METRICS, FONT, COLORS } from '../constants/index';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDayOfWeekFromDate(dt: number): string {
    const date = new Date(dt * 1000);
    return daysOfWeek[date.getDay()];
}

type Props = {
    forecastWeather: Daily;
}

export const ForecastWeatherInfo: React.FC<Props> = ({ forecastWeather }) => {
  const dayOfWeek = getDayOfWeekFromDate(forecastWeather.dt);
  const icon = forecastWeather.weather[0].icon;
  const main = forecastWeather.weather[0].main;
  const volume: number = forecastWeather.rain || forecastWeather.snow || 0;
  const volumeString = volume ? ` (${volume} mm)` : '';
  const dayTemp = forecastWeather.temp.day;
  const nightTemp = forecastWeather.temp.night;

  return (
    <View style={styles.container}>
      <Text style={styles.dayText}>{dayOfWeek}</Text>
        <View style={styles.iconContainer}>
          <Image style={styles.largeImage}
            source={{
            uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
            }}/>
          <Text style={styles.mainText}>{main}{volumeString}</Text>
        </View>
      <View style={styles.tempContainer}>
          <View style={styles.tempContainer}>
            <Image style={styles.smallImage}
              source={{
                uri: `http://openweathermap.org/img/wn/01d@2x.png`,
              }}/>
            <Text style={styles.weatherText}>{dayTemp} &#8451;</Text>
          </View>
          <View style={styles.tempContainer}>
            <Image style={styles.smallImage}
              source={{
                uri: `http://openweathermap.org/img/wn/01n@2x.png`,
              }}/>
            <Text style={styles.weatherText}>{nightTemp} &#8451;</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
    margin: 10,
    backgroundColor: COLORS.forecastBackground,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  smallImage: {
    width: METRICS.smallIcon,
    height: METRICS.smallIcon,
  },
  largeImage: {
    width: METRICS.bigIcon,
    height: METRICS.bigIcon,
  },
  dayText: {
    margin: 10,
    fontSize: FONT.mediumLarge,
    color: COLORS.textColor,
  },
  mainText: {
    margin: 10,
    fontSize: FONT.mediumLarge,
    color: COLORS.textColor,
  },
  weatherText: {
    fontSize: FONT.mediumSmall,
    color: COLORS.tempColor,
  },
})