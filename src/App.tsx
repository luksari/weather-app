import React, { Component } from 'react';
import { connect } from 'react-redux'
import { RootState } from 'MyTypes';
import { WeatherView } from './components/WeatherView'
import styled from './theme/theme';
import { CityForm } from './components/CityForm';


const mapStateToProps = (state: RootState) => ({
  isLoading: state.weatherReducer.isLoadingWeather,
  weatherObject: state.weatherReducer.weather
})

type Props = ReturnType<typeof mapStateToProps>;
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
    const {isLoading, weatherObject} = this.props
    return (
      <AppWrapper>
        <CityForm/>
        <WeatherView isLoading={isLoading} weatherObject={weatherObject}/>
      </AppWrapper>
    );
  }
}


export const App = connect(mapStateToProps, null)(AppRaw);

