/// <reference path="../model/types.d.ts"/>
import {
    ajax
} from 'rxjs/ajax';
import {
    map,
    catchError
} from 'rxjs/operators';
const ROOT_API = "api.openweathermap.org/data/2.5/weather?q="

export function getWeatherForCity(city: string) {
    return ajax.getJSON(`${ROOT_API}${city}`)
        .pipe(
            map((response: string) => console.log(response)),
            catchError((error: string) => error));
}