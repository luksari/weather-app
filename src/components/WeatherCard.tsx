import React from 'react';
import { WeatherModel } from 'MyModels';
import posed, {PoseGroup} from 'react-pose';
import styled from '../theme/theme';
import { Label } from './Label';

const PosedWeatherCard = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
          y: { type: 'spring', stiffness: 1000, damping: 15 },
          default: { duration: 300 }
        }
      },
      exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
      }
    });

const StyledWeatherCard = styled(PosedWeatherCard)`
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

type Props = {
    weather: WeatherModel,
}
type State = {
    pose: string
}

export class WeatherCard extends React.Component<Props, State> {
    constructor(props : Props){
        super(props);
        this.state = {
            pose: 'hidden'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                pose: 'shown'
            })
        },100)
    }
    render(){
        const {weather} = this.props;
        const {pose} = this.state;
        const { temp, pressure, humidity } = weather.main;
        const { name } = weather;
        const { description } = weather.weather[0];
        const rain = typeof weather.rain !== 'undefined' ? weather.rain['1h'] : "No rain today :)";
        const { speed } = weather.wind;
        if(typeof weather.cod !== 'undefined'){
            return( 
                <PoseGroup animateOnMount>
                    {pose === 'shown' && 
                    <StyledWeatherCard key='card'>
                        <Label type="name">{ name }</Label>
                        <Label type="description">{ description }</Label>
                        <Label type="temperature">{ parseInt(temp.toString(), 10)}&#176;C</Label>
                        <Label type="details"><span>Air pressure:</span> { pressure }hPa</Label>
                        <Label type="details"><span>Humidity:</span> { humidity }%</Label>
                        <Label type="details"><span>Wind speed:</span>  {speed} m/s</Label>
                        <Label type="details">Rain: {rain}</Label>
                    </StyledWeatherCard>
                    }
                </PoseGroup>)
        } 
        return <div/>
    }

}