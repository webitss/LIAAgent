import {Component} from "@angular/core";
import {AppService} from "../app.service";

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
      <div class="div"><img [src]="service.products[i]" class="img" />
          <p>{{this.service.thisProduct}}</p>
      </div>
`})
export class ProductDetailsComponent {
   // myPictures:String[]=[];
    i:number=0;
    constructor(public service:AppService)
    {
        
    }
}