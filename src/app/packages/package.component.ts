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
    
<div class="name-ticket col-xs-3 col-md-3">
    <div>{{this.service.package?.ProductName}}</div>
       
</div>
        <div class="bord col-xs-9 col-md-9">
            <div class="position-relative">
            <span class="TicketsNum-inner"> {{this.service.package?.TicketsNum}}</span>
            <div class="ticket-sub">כרטיסים</div>
        </div>
     <div class="Line-buffer"></div>
   <div>
   
   <div class="ticket-cost">{{this.service.package?.TicketCost}}</div>
   <div class="ticket-cost-text">
   <span>שקל</span><br/>
   <span>לכרטיס</span><br/>
   <span>בודד </span>
   </div>
   <div class="Line-buffer"></div>
   </div>
 
</div>



    
   

           

           
        
    `
})
export class PackageComponent  {
    
   
    constructor( public service: LiaService) {
        
        console.log(this.service.packages);
        this.service.package=this.packageInput;
        console.log(this.packageInput);
        console.log(this.service.package);


    }
    @Input() packageInput: any;
    

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
