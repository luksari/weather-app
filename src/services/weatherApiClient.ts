
import {ajax} from 'rxjs/ajax'
import { catchError, map } from 'rxjs/operators';
import { RootWeather } from 'MyModels';

const ROOT = 'https://api.openweathermap.org/data/2.5/weather?q='
const KEY = 'e1c0addf16682f82bfb4ba04cec7407b'

export const getWeatherForCity = (cityName: string) => {
    const url : string = `${ROOT}${cityName}&appid=${KEY}`
    return ajax.getJSON(url).pipe(
        map(response => response as RootWeather),
        catchError(err => err)
    );
    
    
    
}