import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import Swal from 'sweetalert2';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]

})
export class ArticleEditComponent implements OnInit {

  public article: Article;
  public status: string;
  public afuConfig: any;
  public resetVar: boolean;
  public is_edit:boolean;
  public url;
  public image_changed: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { 
    this.image_changed = false;
    this.is_edit = true;
    this.article = new Article('1', '','','', Date.now());
    this.status = '';
    this.resetVar = false;
    this.url = Global.url;

    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg,.png,.jpeg,.gif",
      maxSize: "50",
      uploadAPI:  {
        url: Global.url + 'upload-image/'+ this.article._id,
      },
      theme: "attachPin",
      hideProgressBar: true,
      hideResetBtn: true,
      hideSelectBtn: true,
      fileNameIndex: true,
      replaceTexts:{
        attachPinBtn: 'Cambia la imagen del artículo'
      }      
    };
  }

  ngOnInit(): void {
    this.getArticle();
  }


  onSubmit(navigate_home: boolean = false){
    this._articleService.update(this.article._id, this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.article = response.articleUpdated;
          if(navigate_home){
            this._router.navigate(['/home']);
            Swal.fire({
              title: 'Artículo actualizado',
              text: 'Haz actualizado el artículo:' + this.article.title,
              icon: 'info',
              confirmButtonText: 'Cool'
            });
          }
          
        }else{
          this.status = 'error';
          Swal.fire({
              title: 'Artículo no actualizado',
              text: 'No se ha actualizado el artículo, inténtalo más tarde',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        Swal.fire({
          title: 'Artículo no actualizado',
          text: 'No se ha actualizado el artículo, inténtalo más tarde',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );
  }

  imageUpload(data: any){
    let image_data = data.body.article.image;
    this.image_changed = true;
    this.article.image = image_data;
    this.onSubmit();
    Swal.fire({
      title: 'Imagen reemplazada',
      text: 'Haz reemplazado la imagen del artículo',
      icon: 'info',
      confirmButtonText: 'Cool'
    });
  }

  getArticle(){
    this._route.params.subscribe( params => {
      let articleId = params['id'];
      this._articleService.getArticle(articleId).subscribe( 
        response => {
          if(response.status == 'success'){
            this.article = response.article;
            this.afuConfig = {
              multiple: false,
              formatsAllowed: ".jpg,.png,.jpeg,.gif",
              maxSize: "50",
              uploadAPI:  {
                url: Global.url + 'upload-image/'+ this.article._id,
              },
              theme: "attachPin",
              hideProgressBar: true,
              hideResetBtn: true,
              hideSelectBtn: true,
              fileNameIndex: true,
              replaceTexts:{
                attachPinBtn: 'Cambia la imagen del artículo'
              }      
            };
          }else{

          }
        },
        error => {
          this._router.navigate(['/home']);
        }
        
      );
    });
  }

}
