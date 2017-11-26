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
            <div class="bord col-xs-9 col-md-9"><span>TicketCost:    {{package?.TicketCost}}</span>
           <span>TicketsNum:    {{package?.TicketsNum}}</span></div>
           
</div>
        
    `
})
export class PackageComponent {
    constructor() {
    }

    @Input() package: any;

}
