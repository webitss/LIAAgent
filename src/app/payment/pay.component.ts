import {Component, Input} from "@angular/core";
import { LiaService } from "../lia.service";



@Component({
    selector: 'pay',
    styles: [
        `
        
        `
    ],
    template: 
    `
    <div>     
    <button>אשראי</button>
    <button>צקים</button>
    <button>מזומן</button>
    </div>   
    <div>   
    <input type="checkbox"/>  
    <a>הריני מאשר את תקנון השימוש</a>
    <textarea></textarea>
    </div>   

 `
})
export class PayComponent  {
    
    
   
    constructor( public service: LiaService) {
        this.service.nowComponent="תשלום";
    }

    

}