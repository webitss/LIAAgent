import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../../lia.service";
import {Subscription } from "rxjs/Subscription";
import {ActivatedRoute } from "@angular/router";
import {Router } from "@angular/router";

@Component({
    selector: 'packageSelectedComponent',
    styles: ['packageSelected.component.scss'],
    templateUrl: 'packageSelected.component.html'
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
        this.service.isOuter=false;
        this.service.isInner=true;
        this.product=this.service.packageProduct;
                this.sub=route.params.subscribe(params=>{
                    this.id=params['productId'];
             });
                this.nowPackage=this.service.getPackageById(this.id);
                console.log(this.nowPackage);
    }


    details(product?)
    {
       this.service.isPackageProductDetailed=!this.service.isPackageProductDetailed;
       this.product=product;
       console.log(this.product);
    }
    updateThisProduct()
    {
        this.service.packageProduct=this.product;
    }
 
}