import * as React from 'react';
import styled, { css, keyframes } from '../theme/theme';
import posed from 'react-pose'
import { connect } from 'react-redux';
import { RootState } from 'MyTypes';

const PosedWeatherViewContainer = posed.div({
    shown: {y: '0%'},
    hidden: {y: '-200%'}
})

const WeatherViewContainer = styled(PosedWeatherViewContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    background: #FFFFFF;
    border-radius: 15px;
    box-sizing: border-box;
    box-shadow: 0px 3px 6px #cfcfcf;
    margin: 10px;
    padding: 15px 0 15px 0;
`
const cssInjector = (fontSize : number, fontWeight : number, color?: string, toUpper?: boolean, border?: boolean) => {
    return css`
        text-transform: ${toUpper ? 'uppercase' : 'none'};
        color: ${color};
        font-size: ${fontSize}em;
        font-weight: ${fontWeight};
        border-bottom: ${border ? `1px solid ${color}` : 'none'};
        `  
}
const Label = styled("p")<{type: string}>`
    text-align: left;
    margin: 0 0 0 15px;
    padding: 2px;
    width: 80%;
    color: ${props => props.theme.primaryColor};
    ${({type, theme}) => {
        switch(type) {
            case "name": return cssInjector(0.95, 500, theme.alternativeColor, true);
            case "description": return cssInjector(1.65, 400); 
            case "temperature": return cssInjector(2.45, 700, theme.primaryColor, undefined, true); 
            case "details": return cssInjector(0.95, 500); 
            default : return cssInjector(1, 400);  
            }
        }
    }
`;
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
        animation: ${loaderAnimation} 2s linear infinite;
    }
`
const mapStateToProps = (state: RootState) => ({
    isLoading: state.weatherReducer.isLoadingWeather,
    weatherObject: state.weatherReducer.weather,
    pose: state.weatherReducer.pose,
    error: state.weatherReducer.error
  })

interface State {}
type Props = ReturnType<typeof mapStateToProps>;

export class WeatherViewRaw extends React.Component<Props, State>{
    render(){
        const { weatherObject, isLoading, pose, error } = this.props;
        if(error !== '' || weatherObject.cod !== 200) return(<p>{error}</p>) 
        if(isLoading) return <Loader>&lt;&gt;</Loader>
        const { temp, pressure, humidity } = weatherObject.main;
        const { description } = weatherObject.weather[0];
        const rain = typeof weatherObject.rain === 'undefined' ? "No rain now :)" : weatherObject.rain['1h'];
        const { speed } = weatherObject.wind;
        const { name } = weatherObject;
        return (
        <WeatherViewContainer pose={pose}>
            <Label type="name">{ name }</Label>
            <Label type="description">{ description }</Label>
            <Label type="temperature">{ parseInt(temp.toString(), 10)}&#176;C</Label>
            <Label type="details"><span>Air pressure:</span> { pressure }hPa</Label>
            <Label type="details"><span>Humidity:</span> { humidity }%</Label>
            <Label type="details"><span>Wind speed:</span>  {speed} m/s</Label>
            <Label type="details">Rain: {rain}</Label>
        </WeatherViewContainer>)
    }
}

export const WeatherView = connect(mapStateToProps)(WeatherViewRaw)




