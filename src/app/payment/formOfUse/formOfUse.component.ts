import {Component, Input} from "@angular/core";
import { LiaService } from "../../lia.service";



@Component({
    selector: 'formOfUse',
    styles: ['formOfUse.component.scss'],
    templateUrl: 'formOfUse.component.html'
  
})
export class FormOfUseComponent  {
    
    

    constructor( public service: LiaService) {
        this.service.nowComponent="תשלום";
        
    }

    

}