import {Component, Input} from "@angular/core";
import {PackagesModel} from "./packages.model";


@Component({
    selector: 'package',
    styles: [
        `
        `
    ],
    template: `        

    <div class="col-md-12">
            <div class="name-ticket col-xs-3 col-md-3"><div>{{package?.ProductName}}</div></div>
            <div class="bord col-xs-9 col-md-9">

           <div class="position-relative">
           <span class="TicketsNum-inner">{{package?.TicketsNum}}</span>
           <div class="ticket-sub">כרטיסים</div>
           </div>

<div class="Line-buffer"></div>

           <div>
          
           <div class="ticket-cost">{{package?.TicketCost}}</div>
           <div class="ticket-cost-text">
           <span>שקל</span><br/>
           <span>לכרטיס</span><br/>
           <span>בודד </span>
           </div>
          

               </div>
<div class="Line-buffer"></div>
           </div>
           
</div>
        
    `
})
export class PackageComponent {
    constructor() {
    }

    @Input() package: any;

}
