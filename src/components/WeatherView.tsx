import * as React from 'react';
import { RootWeather } from 'MyModels';
import styled from 'styled-components';

interface Props {
    weatherObject: RootWeather;
    isLoading: boolean
}
const WeatherViewContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const Label = styled.p`
    font-size: 5em;
`

export const WeatherView: React.SFC<Props> = ({weatherObject, isLoading}) => {
    // Probably not the best check if weather is not an empty object
    if(typeof weatherObject.base !== 'undefined'){
        console.log(weatherObject.weather)
            const { temp, pressure, humidity } = weatherObject.main;
            const { description, icon } = weatherObject.weather[0];
            const { speed, deg, gust } = weatherObject.wind;
            const { name } = weatherObject;
            return (
                <WeatherViewContainer>
                    <Label>Temperature: {temp}</Label>
                    <Label>Air pressure: {pressure}</Label>
                    <Label>Humidity: {humidity}</Label>
                    <Label>Description{ description}</Label>
                    <Label>Icon: {icon}</Label>
                    <Label>Wind speed: {speed}</Label>
                    <Label>Degree: {deg}</Label>
                    <Label>Gust: {gust}</Label>
                    <Label>Cityname: {name}</Label>
                </WeatherViewContainer>
            )
        }
        return(
            <div/>
        )
       
    }


