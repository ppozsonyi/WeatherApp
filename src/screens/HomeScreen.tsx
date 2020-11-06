import React, { Component } from 'react';
import { StyleSheet, ScrollView, Alert, View, Text } from 'react-native';
import { MainWeatherInfo, DailyForecast, WeatherDetails } from '../components/index';
import { networkingService, locationService } from '../services/index';
import { WeatherInfo } from '../models/WeatherInfo';
import { COLORS, FONT } from '../constants';

const weatherErrorMess = 'Can\'t get weather information!';
const localityErrorMess = 'Can\'t determine locality!';

interface State {
  weatherInfo?: WeatherInfo,
  locality: string,
  weatherLoading: boolean,
}

export class HomeScreen extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      locality: '',
      weatherLoading: true,
    }
  }

  componentDidMount() {
    locationService.getCurrentCoordinates()
      .then(position => {
        networkingService.getWeatherInfo(position.lat, position.lng)
          .then(res => this.setState({ weatherInfo: res, weatherLoading: false }))
          .catch(_ => Alert.alert(weatherErrorMess))
        locationService.getLocationByCoords(position)
          .then(locality => this.setState({ locality }))
          .catch(_ => Alert.alert(localityErrorMess))
      })
    
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.weatherLoading ? 
        (<Text style={styles.loadingText}>Loading...</Text>) : 
        (<View style={styles.container}>
           <MainWeatherInfo currentWeather={this.state.weatherInfo!.current} locality={this.state.locality}/>
           <WeatherDetails  currentWeather={this.state.weatherInfo!.current} />
           <DailyForecast forecastWeather={this.state.weatherInfo!.daily} />
         </View>)}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.appBackground,
  },
  loadingText: {
    fontSize: FONT.mediumSmall,
  }
});