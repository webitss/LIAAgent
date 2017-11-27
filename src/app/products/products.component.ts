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
    <img src="assets/pictures/icon-lia.png" (click)="this.goTo('Application')"/>
    </div>
    <p>אפליקציה</p>
    </div>

    <div class="app-products">
    <div class="bg-icon-app-products bg-blue-2">
    <i class="icon-social" (click)="this.goTo('FaceBookCampain')"></i>
    </div>
    <p>פייסבוק</p>
    </div>

    <div class="app-products">
    <div class="bg-icon-app-products bg-light-blue">
    <i class="icon-social" (click)="this.goTo('FaceBookCampain')"></i>
    </div>
    <p>קמפין פייסבוק</p>
    </div>


      <div class="app-products">
       <div class="bg-icon-app-products bg-yellow">
       <i class="icon-Cart-06 "(click)="this.goTo('Site')"></i>
       </div>
       <p>אתר החברה</p>
      </div>

</div>
      <div class="row">

      <div class="app-products">
      <div class="bg-icon-app-products bg-yellow">
      <i class="icon-bell-15"(click)="this.goTo('Warnings')"></i>
      </div>
      <p>התראה רגילה</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products bg-red">
      <i class="icon-alarm-1" (click)="this.goTo('FaceBookCampain')"></i>
      </div>
      <p>התראה חמה</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products bg-green">
      <i class="icon-music" (click)="this.goTo('FaceBookCampain')"></i>
      </div>
      <p>התראה קופצת</p>
      </div>

      <div class="app-products">
      <div class="bg-icon-app-products bg-pink">
      <i  class="icon-star-14"(click)="this.goTo('FavoriteSales')"></i>
      </div>
      <p>מבצעים מועדפים</p>
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