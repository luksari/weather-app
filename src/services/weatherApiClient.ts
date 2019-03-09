
import {ajax} from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators';
import { RootWeather } from 'MyModels';

const ROOT = 'https://api.openweathermap.org/data/2.5/weather?q=';
const KEY = `&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
const UNIT = '&units=metric';

export const getWeatherForCity = (cityName: string) => {
    const url : string = `${ROOT}${cityName}${UNIT}${KEY}`;
    console.log(url)
    return ajax.getJSON(url).pipe(
        map(response => response as RootWeather),
        catchError(err => err)
    );
    
    
    
}