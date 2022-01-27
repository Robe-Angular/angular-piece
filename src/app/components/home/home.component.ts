import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {
  public title: string;
  public url: string;
  public articles: Article[];

  constructor(
    private _articleService: ArticleService
  ) {
    this.title = 'Últimos artículos';
    this.url = Global.url;
    this.articles = [];
  }

  ngOnInit(): void {
    this._articleService.getArticles('true').subscribe(
      response => {
        console.log(response);
        if(response.status == "success" || response.articles){
          this.articles = response.articles;
        }else{

        }
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
