import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchWeather} from './actions/actions'
import { RootState } from 'MyTypes';
import { WeatherView } from './components/WeatherView'
import styled from './theme/theme';


const mapStateToProps = (state: RootState) => ({
  isLoading: state.weatherReducer.isLoadingWeather,
  weatherObject: state.weatherReducer.weather
})

const mapDispatchToProps = {
  fetchWeather: fetchWeather.request
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
type State = {}

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({theme})=>theme.backgroundColor};
`

class AppRaw extends Component<Props, State> {
  render() {
    const {isLoading, fetchWeather, weatherObject} = this.props
    return (
      <AppWrapper>
        <button onClick={() => fetchWeather("Sosnowiec,pl")} disabled={isLoading}>LoadWeather</button>
        <WeatherView isLoading={isLoading} weatherObject={weatherObject}/>
      </AppWrapper>
    );
  }
}


export const App = connect(mapStateToProps, mapDispatchToProps)(AppRaw);

