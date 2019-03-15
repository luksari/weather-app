import * as React from 'react';
import styled, { keyframes } from '../theme/theme';
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';
import { Label } from './Label';
import { WeatherCard } from './WeatherCard';

const loaderAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

const Loader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 2rem;
    font-size: 5rem;
    color: ${props => props.theme.alternativeColor};
    background: ${props => props.theme.primaryColor};
    span{
        display: block;
        text-align: center;
        animation: ${loaderAnimation} 1s linear infinite;
    }
`
const mapStateToProps = (state: RootState) => ({
    isLoading: state.weatherReducer.isLoadingWeather,
    weatherObject: state.weatherReducer.weather,
    error: state.weatherReducer.error,
  })

type Props = ReturnType<typeof mapStateToProps>;

export const WeatherViewRaw : React.FC<Props> = (props) => {
    const { weatherObject, isLoading, error } = props;
    if(isLoading) {return <Loader><span>&lt;&gt;</span></Loader>}
    else if(typeof error.cod !== 'undefined' || typeof weatherObject.cod === 'undefined') {return <Label type="error">{error.message}</Label>}
    else if(typeof weatherObject.cod !== 'undefined')
    return (
        <WeatherCard weather={weatherObject}/>
    )
    else
     return <div/>
}

export const WeatherView = connect(mapStateToProps)(WeatherViewRaw)




