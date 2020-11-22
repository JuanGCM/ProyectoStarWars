import { Component, OnInit } from '@angular/core';
import { Film } from 'src/models/films';
import {FilmsService} from '../../services/films.service';

@Component({
  selector: 'app-films-listado',
  templateUrl: './films-listado.component.html',
  styleUrls: ['./films-listado.component.scss']
})
export class FilmsListadoComponent implements OnInit {

  listadoPeliculas:Film[];
  columnsToDisplay = ['title','episode_id', 'opening_crawl','director','producer','release_date'];

  constructor(private filmService: FilmsService) { }

  ngOnInit(): void {

    this.loadFilms();
  }

  loadFilms() {
    this.filmService.getFilms().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });
  }

}
