import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import Swal from 'sweetalert2';
import { Global } from '../../services/global';


@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
  public afuConfig: any;
  public resetVar: boolean;
  public is_edit: boolean;
  public url: string;
  public image_changed: boolean;
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) { 
    this.is_edit = false;
    this.article = new Article('1', '','','', Date.now());
    this.status = '';
    this.resetVar = false;
    this.url = Global.url;
    this.image_changed = false;
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
        attachPinBtn: 'Sube la imagen del artículo'
      }      
    };
  }

  ngOnInit(): void {
  }

  onSubmit(navigate_home:boolean){
    this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          
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
              attachPinBtn: 'Sube la imagen del artículo'
            }      
          };
          Swal.fire({
              title: 'Artículo creado',
              text: 'Has creado el artículo correctamente',
              icon: 'success',
              confirmButtonText: 'Ok'
          });
    }else{
          this.status = 'error';
          Swal.fire({
              title: 'Artículo no creado',
              text: 'No se ha creado el artículo, intenta más tarde',
              icon: 'error',
              confirmButtonText: 'Ok'
          });
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
        Swal.fire({
          title: 'Artículo no creado',
          text: 'No se ha creado el artículo, intenta más tarde',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    );
  }

  imageUpload(data: any){
    let image_data = data.body.article;
    Swal.fire({
      title: 'Imagen guardada',
      text: 'Has guardado la imagen correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this._router.navigate(['/home']);
  }
}
