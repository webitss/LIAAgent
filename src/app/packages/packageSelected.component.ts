import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../lia.service";
import {Subscription } from "rxjs/Subscription";
import {ActivatedRoute } from "@angular/router";
import {Router } from "@angular/router";

@Component({
    selector: 'packageSelectedComponent',
    styles: [
        `
        #divLeft{
            left="50px";
        }
        `
    ],
    template: `
    
       <package [package]="this.nowPackage">
            <div *ngIf="!this.isDetailed" class="container-lia container" >
                    <div *ngFor="let p of this.nowPackage?.Products" class="ParentProductId">
                                    <div (click)="this.details(p)">
                                            {{p.ParentProductId}}
                                            {{p.ProductId}}
                                            {{p.ProductName}}
                                            <i class="icon-arrow-left-03"></i>
                                    </div>
                    </div>
            </div>

            <div *ngIf="this.isDetailed">
            <p> {{this.product.ProductId}}</p>
            <p> {{this.product.ProductName}}</p>
            <img [src]="this.product.PictureUrl"/>
            <input *ngIf="this.product.VideoUrl" type="button" value="לצפיה" />
           <button (click)="this.details()"> <i class="icon-arrow-right-02"></i></button>
           <button routerLink="../"> x</button>
            </div>
       </package>
       
  
    `
})
export class PackageSelectedComponent implements OnDestroy{

    ngOnDestroy(): void {
        this.sub.unsubscribe;
    }
    nowPackage:any;
    product:any;
    sub:Subscription;
    id:number;
    isDetailed:boolean;
    constructor(private route:ActivatedRoute,private router:Router,public service: LiaService){
        this.isDetailed=false;
        this.service.isOuter=false;
        this.service.isInner=true;
                this.sub=route.params.subscribe(params=>{
                    this.id=params['productId'];
             });
                this.nowPackage=this.service.getPackageById(this.id);
                console.log(this.nowPackage);
    }


    details(product?)
    {
       this.isDetailed=!this.isDetailed;
       this.product=product;
       console.log(this.product);
    }
 
}