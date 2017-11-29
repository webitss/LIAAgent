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
    <div *ngIf="!this.service.isTerminateOrdered">
    <div *ngIf="!this.service.isPayed">     
    <button (click)="this.service.isPayed=true">אשראי</button>
    <button (click)="this.service.isPayed=true">צקים</button>
    <button (click)="this.service.isPayed=true">מזומן</button>
    </div>   
    <div *ngIf="this.service.isPayed">   
    <input type="checkbox"/>  
    <a routerLink="formOfUse">הריני מאשר את תקנון השימוש</a>
    <textarea></textarea>
    <textarea></textarea>
    <button (click)="this.service.isTerminateOrdered=true">המשך</button>
    </div>   
    </div>
    <div *ngIf="this.service.isTerminateOrdered">
    ההזמנה בוצעה בהצלחה</div>

 `
})
export class PayComponent  {
    
    
   
    constructor( public service: LiaService) {
        this.service.nowComponent="תשלום";
        
    }

    

}