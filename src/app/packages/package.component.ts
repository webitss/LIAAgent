import {Component, Input} from "@angular/core";
import { LiaService } from "../lia.service";


@Component({
    selector: 'package',
    styles: [
        `
        `
    ],
    template: `  
      
     <div class="col-md-12">

        <div [ngClass]="{'col-xs-3 col-md-3 ':this.service.isOuter, 'col-xs-1 col-md-1': this.service.isInner}" class="name-ticket">
            <div>{{this.package?.ProductName}}</div></div>

        <div [ngClass]="{'col-xs-9 col-md-9 ':this.service.isOuter, 'col-xs-3 col-md-3': this.service.isInner , 'bord':this.service.isOuter, 'bord-2': this.service.isInner}" class="">
            <div class="position-relative">
                <span class="TicketsNum-inner"> {{this.package?.TicketsNum}}</span>
                    <div class="ticket-sub">כרטיסים</div>
            </div>

            <div class="Line-buffer"></div>

            <div>
                    
                    <div class="ticket-cost">{{this.package?.TicketCost}}</div>
                    <div class="ticket-cost-text">
                        <span>שקל</span><br/>
                        <span>לכרטיס</span><br/>
                        <span>בודד </span>
                    </div>
                 
            </div>
            <div class="Line-buffer"></div>
            
            
        </div>
        <div class="col-xs-5 col-md-5 p-none">    
        <ng-content></ng-content>
        </div>  

        <div class="col-xs-3 col-md-3 p-none">    
        <div class="add-cart bg-yellow ">
        <input type="button" class="center-center btn-white" value="הוסף לסל" (click)="this.service.clickAddToCart()" >
        <button routerLink="../" class="pull-right btn-font"><i class="icon-icon-x_Artboard-2-01 "></i> </button>
        </div>
        </div> 

     </div>

 `
})
export class PackageComponent  {
    @Input() package: any;
    
   
    constructor( public service: LiaService) {
    }

    

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
     // <div class="col-md-12">

    //     <div class="name-ticket col-xs-3 col-md-3">
    //         <div>{{this.service.package?.ProductName}}</div>
               
    //     </div>
    //             <div class="bord col-xs-9 col-md-9">
    //                 <div class="position-relative">
    //                 <span class="TicketsNum-inner"> {{this.service.package?.TicketsNum}}</span>
    //                 <div class="ticket-sub">כרטיסים</div>
    //             </div>
    //          <div class="Line-buffer"></div>
    //        <div>
           
    //        <div class="ticket-cost">{{this.service.package?.TicketCost}}</div>
    //        <div class="ticket-cost-text">
    //        <span>שקל</span><br/>
    //        <span>לכרטיס</span><br/>
    //        <span>בודד </span>
    //        </div>
    //        <div class="Line-buffer"></div>
    //        </div>
    // </div>
