import {Component} from "@angular/core";
import { LiaService } from "../lia.service";


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
      <div class="div">
          {{this.service.thisProductDetails.ProductId}}          
      </div>
`})
export class ProductDetailsComponent {
   // myPictures:String[]=[];
    i:number=0;
    constructor(public service:LiaService)
    {
        
    }
}
/*
{{this.service.thisProductDetails.ProductId}}
    {{this.service.thisProductDetails | json}}
    <img [src]="this.thisProductDetails.pictureUrl" class="img"/>
*/
//   <img [src]="service.products[i]" class="img" />