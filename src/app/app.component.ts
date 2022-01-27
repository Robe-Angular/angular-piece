import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public homeText: string;
  constructor(){
    this.title = 'Curso de Angular de Víctor Robles';
    this.homeText = 'Hola desde el elemento padre 3';
  }
}
