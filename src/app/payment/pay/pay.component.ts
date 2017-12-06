import {Component, Input} from "@angular/core";
import { LiaService } from "../../lia.service";



@Component({
    selector: 'pay',
    styleUrls: ['pay.component.scss'],
    templateUrl:'pay.component.html'
})
export class PayComponent  {
    
    
   
    constructor( public service: LiaService) {
        this.service.nowComponent="תשלום";
        
    }

    

}