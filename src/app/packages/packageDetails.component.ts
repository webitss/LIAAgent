import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {types} from "./packages.model";
import {LiaService} from "../lia.service";

@Component({
    selector: 'packageDetails',
    styles: [],
    template: `
        <div class="container-lia container">
           <div  *ngFor="let p of package?.Products" class="ParentProductId">
           <input type="button" *ngIf="p.VideoUrl" (click)="try()" routerLink="video" value="לצפיה">
           {{p.ParentProductId}}
           {{p.ProductId}}
           {{p.ProductName}}
           <i class="icon-arrow-left-03"></i>
           </div>
        </div>

       
        
        <router-outlet></router-outlet>
    `
})
export class PackageDetailsComponent {

   

    constructor(private route: ActivatedRoute, public service: LiaService) {
        


    }
   try(){
       this.service.src="../../assets/2017-11-01-VIDEO-00000908.mp4";
   }

}



/*<!--  <input type="button" [routerLink]="p.VideoUrl">-->
<input type="button" *ngIf="p.VideoUrl" (click)="try()" routerLink="video" value="לצפיה">
<!--<video width="320" height="240" autoplay>
   &lt;!&ndash; <source src="" type="video/mp3 "> &ndash;&gt;
    <source src="../../assets/2017-11-01-VIDEO-00000908.mp4" type="video/mp4 ">
</video>-->
<!-- <videoComponent [video]="{{p.VideoUrl}}"></videoComponent>-->
<i class="icon-arrow-left-03"></i>
<!--{{p.PictureUrl}}-->*/
//<package [package]="package"></package> 