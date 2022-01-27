import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public busqueda_cargada: boolean;
  public search: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { 
    this.articles = [];
    this.busqueda_cargada = false;
    this.search = '';
  }

  ngOnInit(): void {
    this._route.params.subscribe( params => {
      var search = params['search'];
      this.search = search;
      this._articleService.search(search).subscribe(
        response => {
          if(response.articles){
            this.articles = response.articles;
            this.busqueda_cargada = true;
          }else{
            this.articles=[];
            this.busqueda_cargada = true;
          }
          
        },
        error => {
          console.log(error);
          this.articles=[];
          this.busqueda_cargada = true;
        }
      )
    })
  }



}
