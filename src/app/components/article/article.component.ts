import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public article: Article;
  public url: string;

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article('1', '', '', '', Date.now());
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(
        response => {
          if(response.status == 'success'){
            this.article = response.article;
          }else{
            this._router.navigate(['/home']);
          }
        },
        error => {
          Swal.fire({
              title: 'Artículo no encontrado',
              text: 'No se ha encontrado el artículo con id: ' + id,
              icon: 'error',
              confirmButtonText: 'Ok'
          });
          this._router.navigate(['/home']);
        }
      );
    });
  }

  delete(id:string){
    Swal.fire({
        title: 'Está seguro de eliminar el artículo: ' + this.article.title,
        showCancelButton: true,
        confirmButtonText: `Eliminar`,
        cancelButtonText:'Cancelar',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this._articleService.delete(id).subscribe(
            response => {
              if (this.article.image != null){
                this._articleService.delete_img(this.article.image).subscribe(
                  response => {
                    this._router.navigate(['/blog']); 
                  },
                  error => {

                  }
                );
              }
              this._router.navigate(['/blog']);           
            },
            error => {
              console.log(error);
            }
          );
          Swal.fire('Artículo eliminado', '', 'success')
        } else{
          Swal.fire('El artículo no se eliminará', '', 'info')
        }
    });
      
  }

}
