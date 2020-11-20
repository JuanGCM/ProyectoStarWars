import { Planet } from './planet';
 
export interface PlanetResponse{
    count: number;
    next: string;
    previous?: any;
    results: Planet[];
}
