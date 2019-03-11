import * as React from 'react';
import { WeatherModel } from 'MyModels';
import styled from '../utils/styled-components'
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
const Label = styled('p')`
    width: 100%;
    text-align: left;
    font-size: '${( props ) => { 
        switch(props.type){
            default: return 1;
        }
    }
    }em'
    padding: 10px;
    
    
`
const Loader = styled.div`
    margin: 0;
`

export const WeatherView: React.SFC<Props> = ({weatherObject, isLoading}) => {
    // Probably not the best check if weather is not an empty object
    if(typeof weatherObject.main !== undefined && weatherObject.cod == 200){
            const { temp, pressure, humidity } = weatherObject.main;
            const { description } = weatherObject.weather[0];
            const rain = typeof weatherObject.rain === 'undefined' ? "No rain today :)" : weatherObject.rain['1h'];
            
            const { speed } = weatherObject.wind;
            const { name } = weatherObject;
            return (
                <WeatherViewContainer>
                    <Label type="name">{ name }</Label>
                    <Label type="description">{ description }</Label>
                    <Label type="temperature">{ temp }</Label>
                    <Label type="details"><span>Air pressure:</span> { pressure }hPa</Label>
                    <Label type="details"><span>Humidity:</span> { humidity }%</Label>
                    <Label type="details"><span>Wind speed:</span>  {speed}</Label>
                    <Label type="details">Rain: {rain}</Label>
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


