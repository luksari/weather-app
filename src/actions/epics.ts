/// <reference path="../store/types.d.ts"/>
/// <reference path="../services/types.d.ts"/>
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, map, catchError } from 'rxjs/operators';
import { isActionOf, action } from 'typesafe-actions';
import { RootAction, RootState, Services } from 'MyTypes'
import { fetchWeather } from './actions';

export const loadWeatherEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) => 
action$.pipe(
    filter(isActionOf(fetchWeather.request)),
    switchMap(() =>
      from(api.weather.getWeatherForCity("Sosnowiec")).pipe(
        map(fetchWeather.success),
        catchError((message: string) => of(fetchWeather.failure(message)))
      )
    )
  );
