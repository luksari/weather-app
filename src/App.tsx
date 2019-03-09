import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchWeather} from './actions/actions'
import { RootState } from 'MyTypes';
import {WeatherView} from './components/WeatherView'

const mapStateToProps = (state: RootState) => ({
  isLoading: state.weatherReducer.isLoadingWeather,
  weatherObject: state.weatherReducer.weather
})

const mapDispatchToProps = {
  fetchWeather: fetchWeather.request
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type State = {}

class AppRaw extends Component<Props, State> {
  render() {
    const {isLoading, fetchWeather, weatherObject } = this.props
    return (
      <div className="App">
        <button onClick={() => fetchWeather("Sosnowiec,pl")} disabled={isLoading}>LoadWeather</button>
        <WeatherView isLoading={isLoading} weatherObject={weatherObject}/>
      </div>
    );
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppRaw);

