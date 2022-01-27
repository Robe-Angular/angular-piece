import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Article[];
  @Input() busqueda_cargada: boolean;
  
  public url: string;

  public articles_length: number;

  constructor() { 
    this.articles = [];
    this.articles_length = 0;
    this.url = '';
    this.url = Global.url;
    this.busqueda_cargada = false;
  }

  ngOnInit(): void {
    console.log(this.articles.length);
  }

  GetLength(articlesArray: Article[]){
    this.articles_length = articlesArray.length;
  }


}

