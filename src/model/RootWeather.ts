import { Coord } from './Coord';
import { Weather } from './Weather';
import { Main } from './Main';
import { Sys } from './Sys';
import { Wind } from './Wind';
import { Clouds } from './Clouds'; 

export interface RootWeather {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    id: number;
    name: string;
    cod: number;
}