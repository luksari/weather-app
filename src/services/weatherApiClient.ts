
import {ajax} from 'rxjs/ajax'
import { map } from 'rxjs/operators';
import { WeatherModel } from 'MyModels';

const ROOT = 'https://api.openweathermap.org/data/2.5/weather';
const KEY = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
const UNIT = '&units=metric';
const NAME_QUERY = '?q=';
const LAT_QUERY = '?lat=';
const LON_QUERY = '&lon=';

export const getWeatherForCity = (location: string|Position) => {
    let query = ''
    if((location as Position).coords !== undefined){
        let pos = location as Position;
        query = `${LAT_QUERY}${pos.coords.latitude}${LON_QUERY}${pos.coords.longitude}`;
    }
    else{
        query = `${NAME_QUERY}${location}`
    }
    const url : string = `${ROOT}${query}${UNIT}${KEY}`;
    return ajax.getJSON(url).pipe(
        map((response : WeatherModel) => response))
}