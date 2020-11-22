import { Film } from './films';
 
export interface FilmResponse{
    count: number;
    next: string;
    previous?: any;
    results: Film[];
}