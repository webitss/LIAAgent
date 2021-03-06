import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LiaService } from '../lia.service';

@Component({
    selector: 'app-products',
    template: `

    <div class="container-lia container t-center">


    <div class="row">

    <a  [routerLink]="this.service.products[0]?.ProductId">
    <div class="app-products">
    <div class="bg-icon-app-products">
    <img src="assets/pictures/icon-lia.png"/>
    </div>
    <p>אפליקציה</p>
    </div>
    </a>

    <a [routerLink]="this.service.products[1]?.ProductId">
    <div class="app-products">
    <div class="bg-icon-app-products bg-blue-2">
    <i class="icon-social" ></i>
    </div>
    <p>פייסבוק</p>
    </div>
    </a>

    <a [routerLink]="this.service.products[2]?.ProductId">
    <div class="app-products">
    <div class="bg-icon-app-products bg-light-blue">
    <i class="icon-social" ></i>
    </div>
    <p>קמפין פייסבוק</p>
    </div>
    </a>


    <a [routerLink]="this.service.products[3]?.ProductId">
      <div class="app-products">
       <div class="bg-icon-app-products bg-yellow">
       <i class="icon-Cart-06 " ></i>
       </div>
       <p>אתר החברה</p>
      </div>
      </a>
               

</div>
      <div class="row">

      <a [routerLink]="this.service.products[4]?.ProductId">
      <div class="app-products">
      <div class="bg-icon-app-products bg-yellow">
      <i class="icon-bell-15" ></i>
      </div>
      <p>התראה רגילה</p>
      </div>
      </a>


      <a [routerLink]="this.service.products[5]?.ProductId">
      <div class="app-products">
      <div class="bg-icon-app-products bg-red">
      <i class="icon-alarm-1" ></i>
      </div>
      <p>התראה חמה</p>
      </div>
      </a>

      <a [routerLink]="this.service.products[6]?.ProductId">
      <div class="app-products">
      <div class="bg-icon-app-products bg-green">
      <i class="icon-music"></i>
      </div>
      <p>התראה קופצת</p>
      </div>
      </a>  

      <a [routerLink]="this.service.products[7]?.ProductId">
      <div class="app-products">
      <div class="bg-icon-app-products bg-pink">
      <i  class="icon-star-14"></i>
      </div>
      <p>מבצעים מועדפים</p>
      </div>
      </a>

      </div>

      </div>
  
 `,
    styles: [
        `
       `
    ]
})
export class ProductsComponent implements OnInit {

    constructor(public router:Router,public service:LiaService) {
        this.service.nowComponent="מוצרים";        
     }

    ngOnInit() {
    }

  

}