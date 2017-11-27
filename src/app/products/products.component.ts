import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
    selector: 'app-products',
    template: `

    <div class="container-lia container t-center">


    <div class="row">
      <div class="app-products">
       <div class="bg-icon-app-products">
       <i class="icon-Cart-06 "(click)="this.goTo('Site')"></i>
       </div>
       <p>Site</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products">
      <i class="icon-bell-15"(click)="this.goTo('Warnings')"></i>
      </div>
      <p>Warnings</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products">
      <img src="assets/pictures/icon-lia.png" (click)="this.goTo('Application')"/>
      </div>
      <p>Application</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products">
      <i  class="icon-star-14"(click)="this.goTo('FavoriteSales')"></i>
      </div>
      <p>Favorite Sales</p>
      </div>

      </div>
      <div class="row">

      <div class="app-products">
      <div class="bg-icon-app-products">
      <i class="icon-star-14" (click)="this.goTo('FaceBookCampain')"></i>
      </div>
      <p>FaceBook Campain</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products">
      <i class="icon-star-14" (click)="this.goTo('FaceBookCampain')"></i>
      </div>
      <p>FaceBook Campain</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products">
      <i class="icon-star-14" (click)="this.goTo('FaceBookCampain')"></i>
      </div>
      <p>FaceBook Campain</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products">
      <i class="icon-star-14" (click)="this.goTo('FaceBookCampain')"></i>
      </div>
      <p>FaceBook Campain</p>
      </div>

      </div>

      </div>
  
 `,
    styles: [
        `
       `
    ]
})
export class ProductsComponent implements OnInit {

    constructor(public router:Router,public service:AppService) {
        
     }

    ngOnInit() {
    }
    goTo(product:String)
    {
        /*this.service.post();*/
        this.service.changeCurrentProduct(product)
        this.router.navigate(['productDetails']);
    }
}