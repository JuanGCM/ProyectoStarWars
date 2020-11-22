import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PlanetsService} from '../app/services/planets.service';
import {FilmsService} from '../app/services/films.service';
import { PlanetsListadoComponent } from './Components/planets-listado/planets-listado.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilmsListadoComponent } from './Components/films-listado/films-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    FilmsListadoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [PlanetsService, FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
