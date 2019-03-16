import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, map, catchError, switchMap, mergeMap, take } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { RootAction, RootState, Services } from 'MyTypes'
import { fetchWeather } from './weatherActions';
import { getMyLocation } from './locationActions';


const options = {
  enableHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
}

export const fetchWeatherEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, { api }) => 
  action$.pipe(
    filter(isActionOf(fetchWeather.request)),
    switchMap( (action) => 
      from(api.weather.getWeatherForCity(action.payload))
          .pipe(
            map(fetchWeather.success),
            catchError(err => of(fetchWeather.failure(err.xhr.response)))
      )
    )
  );
export const getMyLocationEpic: Epic<RootAction, RootAction, RootState, Services> = (action$, state$, {geoLocation}) => 
  action$.pipe(
    filter(isActionOf(getMyLocation.request)),
    mergeMap( ()=> 
    from(geoLocation.getGeoLocation(options)).pipe(
      take(1),
      map(getMyLocation.success),
      catchError(err=> of(getMyLocation.failure(err)))
    ))
  );

