declare module 'MyModels' {
    export interface WeatherModel {
        coord: Coord;
        weather: (WeatherEntity)[];
        base: string;
        main: Main;
        visibility: number;
        wind: Wind;
        rain: Rain;
        clouds: Clouds;
        dt: number;
        sys: Sys;
        id: number;
        name: string;
        cod: number;
      }
      export interface ErrorModel {
        cod: number,
        message: string
      }
}
interface Coord {
    lon: number;
    lat: number;
  }
  interface WeatherEntity {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  }
  interface Wind {
    speed: number;
    deg: number;
  }
  interface Rain {
    [key: string]: number;
  }
  interface Clouds {
    all: number;
  }
  interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  }