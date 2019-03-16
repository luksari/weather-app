import { Observable } from 'rxjs';

export const getGeoLocation = (options:object) => {
    return new Observable(observer => {
        const id = navigator.geolocation.watchPosition(
            position => observer.next(position),
            error => observer.error(error),
            options
        );
        return () => {
            navigator.geolocation.clearWatch(id);
        }
    })
}

