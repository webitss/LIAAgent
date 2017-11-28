import {Component} from "@angular/core";
import { LiaService } from "../lia.service";
import { ActivatedRoute } from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import { Router } from "@angular/router";


@Component({
    selector: 'productDetails',
    styles : [
        `          
      .img{
          width: 120px;
          height:190px;
      }
      .div
      {
          width: 130px;
          height:200px;
          display:inline-block;
          vertical-align:middle;
          position: relative;
          left: 1000px;
          top: 50%;
          margin-top: 100px;
          
     }`
    ],

    template: ` 
    <input *ngIf="this.service.thisProductDetails.VideoUrl" type="button" value="לצפיה">
    <img [src]="this.service.thisProductDetails.PictureUrl"/>
    <h1>{{this.service.thisProductDetails.Duration}}
    {{this.service.thisProductDetails.DurationText}}    
    </h1>
    <br>  
    <h2>
    מחיר:
    {{this.service.thisProductDetails.Price}} 
    </h2>
    <input type="button" value="הוסף לסל">
    <div class="div">

      </div>
`})
export class ProductDetailsComponent {
    i:number=0;
    ProductId: number;
    sub:Subscription;

    constructor(public service:LiaService, private route : ActivatedRoute,router: Router)
    {
        this.sub = route.params.subscribe(params => {
            this.ProductId = params['productId'];
            service.getProductById(this.ProductId);
        });
    }
}

/*
{{this.service.thisProductDetails.ProductId}}
    {{this.service.thisProductDetails | json}}
    <img [src]="this.thisProductDetails.pictureUrl" class="img"/>
*/
//   <img [src]="service.products[i]" class="img" />

