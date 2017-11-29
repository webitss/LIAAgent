import {Component, Input} from "@angular/core";
import { LiaService } from "../lia.service";



@Component({
    selector: 'formOfUse',
    styles: [ ``],
    template: 
    `<a routerLink="../"><i>x</i></a>
    <div>תקנון השימוש</div>

 `
})
export class FormOfUseComponent  {
    
    

    constructor( public service: LiaService) {
        this.service.nowComponent="תשלום";
        
    }

    

}