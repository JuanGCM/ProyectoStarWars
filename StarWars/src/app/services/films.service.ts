import { Injectable } from '@angular/core';
import {FilmResponse} from '../../models/films-response-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const authURL = 'https://swapi.dev/api/films/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

    getFilms(): Observable<FilmResponse> {
      return this.http.get<FilmResponse>(
         authURL,
         requestOptions
      );
   }
  
}
