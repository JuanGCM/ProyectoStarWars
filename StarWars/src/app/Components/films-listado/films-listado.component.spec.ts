import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsListadoComponent } from './films-listado.component';

describe('FilmsListadoComponent', () => {
  let component: FilmsListadoComponent;
  let fixture: ComponentFixture<FilmsListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
