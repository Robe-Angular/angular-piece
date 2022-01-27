import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;
  constructor(
    private _peliculaService: PeliculaService
  ) {
    this.titulo = "Películas"
    
    this.peliculas = this._peliculaService.getPeliculas();
    this.favorita = new Pelicula('',1,'');
    this.fecha = new Date(2020, 7, 12);
  }
    

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck():void{
    console.log("Do check lanzado");
  }

  cambiarTitulo(){
    this.titulo = "El título ha sido cambiado";
  }

  ngOnDestroy(){
    console.log('El componente se va a eliminar de la ejección instantánea')
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }
}
