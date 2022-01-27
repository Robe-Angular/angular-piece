import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit, DoCheck{

  constructor() { }

  ngOnInit(): void {
    console.log("OnInit de pruebas");
  }

  ngDoCheck():void{
    
  }
}
