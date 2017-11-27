import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../lia.service";
import {Subscription } from "rxjs/Subscription";
import {ActivatedRoute } from "@angular/router";
import {Router } from "@angular/router";

@Component({
    selector: 'packageSelectedComponent',
    styles: [],
    template: `
    
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
                this.nowPackage=this.service.getPackageById(this.id)
    }
 
}