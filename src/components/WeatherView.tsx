import * as React from 'react';
import { WeatherModel } from 'MyModels';
import styled from 'styled-components';

interface Props {
    weatherObject: WeatherModel;
    isLoading: boolean
}
const WeatherViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 3px 6px #a4a4a4;
    @media (max-width: 360px) {
        background: red;
  }
`
const Label = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1em;
`
const Loader = styled.div`
    margin: 0;
`

export const WeatherView: React.SFC<Props> = ({weatherObject, isLoading}) => {
    // Probably not the best check if weather is not an empty object
    if(typeof weatherObject.main !== undefined && weatherObject.cod == 200){
            const { temp, pressure, humidity } = weatherObject.main;
            const { description } = weatherObject.weather[0];
            const { speed } = weatherObject.wind;
            const { name } = weatherObject;
            return (
                <WeatherViewContainer>
                    <Label>{name}</Label>
                    <Label>{ description}</Label>
                    <Label>{temp}</Label>
                    <Label>{pressure}</Label>
                    <Label>Humidity: {humidity}</Label>
                    <Label>Wind speed: {speed}</Label>

                </WeatherViewContainer>
            )
        }
        if(isLoading) {
            return <Loader>Loading...</Loader >
        }
        return(
            <div/>
        )
       
    }


