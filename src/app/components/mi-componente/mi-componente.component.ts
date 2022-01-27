import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrar_peliculas: boolean;

    constructor(){
        this.mostrar_peliculas = true;
        this.titulo = "Víctor Robles";
        this.comentario = "Comentario Víctor Robles";
        this.year = 2021;
        console.log('Componente mi-componente Cargado');
    }

    ocultarPeliculas(){
        this.mostrar_peliculas = false;
    }
}