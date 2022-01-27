import { Injectable } from  '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019,"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-remastered-ps5-esquire-4-1605525077.jpg?crop=0.524xw:1.00xh;0.298xw,0&resize=640:*"),
            new Pelicula("Vengadores Endgame", 2018, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-salarios-actores-1562843145.jpg"),
            new Pelicula("Batman vs Superman", 2015, "https://i.ytimg.com/vi/eyATkmsSZJk/sddefault.jpg")
          ];    
    }

    holaMundo(){
        return 'Hola mundo desde un servicio de Angular';
    }

    getPeliculas(){
        return [
            new Pelicula("Spiderman 4", 2019,"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-remastered-ps5-esquire-4-1605525077.jpg?crop=0.524xw:1.00xh;0.298xw,0&resize=640:*"),
            new Pelicula("Vengadores Endgame", 2018, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-salarios-actores-1562843145.jpg"),
            new Pelicula("Batman vs Superman", 2015, "https://i.ytimg.com/vi/eyATkmsSZJk/sddefault.jpg")
        ];    
    }
    
}