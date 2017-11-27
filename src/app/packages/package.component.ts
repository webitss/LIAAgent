import {Component, Input} from "@angular/core";
import {PackagesModel} from "./packages.model";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from "@angular/router/src/router_state";
import { LiaService } from "../lia.service";


@Component({
    selector: 'package',
    styles: [
        `
        `
    ],
    template: `        

    <div class="col-md-12">
            <div class="name-ticket col-xs-3 col-md-3"><div>{{package?.ProductName}}</div></div>
            <div class="bord col-xs-9 col-md-9"><span>TicketCost:{{package?.TicketCost}}</span>
           <span>TicketsNum:    {{package?.TicketsNum}}</span>
           </div>
         
    </div>
        
    `
})
export class PackageComponent  implements OnDestroy{
    
    sub:Subscription;
    t:number;
    nowPackage:any;
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
    constructor(private route: ActivatedRoute, public service: LiaService) {
        this.sub = route.params.subscribe(params => {
            this.t = params.ProductId;
            this.nowPackage = service.getPackageById(this.t);
             console.log(this.nowPackage);
        });


    }
    @Input() package: any;
    

}



/*

    sub: Subscription;
    t: number;
    package: any;
    num:number=4;
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    constructor(private route: ActivatedRoute, public service: LiaService) {
        this.sub = route.params.subscribe(params => {
            this.t = params.ProductId;
            this.package = service.getPackageById(this.t);
             console.log(this.package);
        });


    } */
