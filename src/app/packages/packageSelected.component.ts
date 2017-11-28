import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../lia.service";
import {Subscription } from "rxjs/Subscription";
import {ActivatedRoute } from "@angular/router";
import {Router } from "@angular/router";

@Component({
    selector: 'packageSelectedComponent',
    styles: [
        `
     
        `
    ],
    template: `
    <div class="container-lia container">

       <package [package]="this.nowPackage">
       <div class="">
       <div *ngFor="let p of this.nowPackage?.Products" class="ParentProductId">
       <div (click)="this.clicked()">
       {{p.ParentProductId}}
       {{p.ProductId}}
       {{p.ProductName}}
       <i class="icon-arrow-left-03"></i>
       </div>
       </div>
       </div>
       </package>
     </div>  
  
    `
})
export class PackageSelectedComponent implements OnDestroy{

    ngOnDestroy(): void {
        this.sub.unsubscribe;
    }
    nowPackage:any;
    sub:Subscription;
    id:number;
    constructor(private route:ActivatedRoute,private router:Router,public service: LiaService){
                this.sub=route.params.subscribe(params=>{
                    this.id=params['productId'];
             });
                this.nowPackage=this.service.getPackageById(this.id);
                console.log(this.nowPackage);
    }


    clicked()
    {
console.log("lllllllllllllllllllllll");
    }
 
}