import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState, Services } from 'MyTypes'
import { fetchWeather } from './actions';

export const fetchWeatherEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) => 
  action$.pipe(
    filter(isActionOf(fetchWeather.request)),
    switchMap( (action) => 
      from(api.weather.getWeatherForCity(action.payload))
      .pipe(
        map(fetchWeather.success),
        catchError(error => of(fetchWeather.failure(error)))
      )
    )
  );