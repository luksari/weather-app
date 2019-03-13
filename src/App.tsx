import React, { SFC } from 'react';
import { WeatherView } from './components/WeatherView'
import styled from './theme/theme';
import { CityForm } from './components/CityForm';





const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({theme})=>theme.backgroundColor};
`

export const App : SFC = () =>  {
    return (
      <AppWrapper>
        <CityForm/>
        <WeatherView/>
      </AppWrapper>
    );
  }



