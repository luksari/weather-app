import * as React from 'react';
import { RootWeather } from 'MyModels';
import styled from 'styled-components';

interface Props {
    weatherObject: RootWeather;
    isLoading: boolean
}
const WeatherViewContainer = styled.div`
    display: flex;
    flex-direction: collumn;
`
const Label = styled.p`
    font-size: 24em;
`

export function WeatherView({ weatherObject, isLoading } : Props){
    if(weatherObject ===
         undefined) {return <p>null</p>}


         const { temp, pressure, humidity } = weatherObject.main;
    const { main, description, icon } = weatherObject.weather;
    const { speed, deg, gust } = weatherObject.wind;
    const { name } = weatherObject;
    return (
        
        <WeatherViewContainer>
            <Label>{temp}</Label>
            <Label>{pressure}</Label>
            <Label>{humidity}</Label>
            <Label>{main}</Label>
            <Label>{description}</Label>
            <Label>{icon}</Label>
            <Label>{speed}</Label>
            <Label>{deg}</Label>
            <Label>{gust}</Label>
            <Label>{name}</Label>
        </WeatherViewContainer>
    )
}