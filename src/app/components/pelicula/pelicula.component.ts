import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Input() i: number;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() { 
    this.pelicula = new Pelicula('',1,'');
    this.i = 0;
  }

  ngOnInit(): void {
  }

  seleccionar(event: MouseEvent, pelicula: Pelicula){
    this.MarcarFavorita.emit({
      pelicula: pelicula
    });
  }

}
