import {Component} from "@angular/core";
import {PackagesModel} from "./packages.model";
import {LiaService} from "../lia.service";
import {noUndefined} from "@angular/compiler/src/util";

@Component({
    selector: 'package3',
    styles: [`
    `],
    template: `
        <div class="container-lia container">
            <table style="width:100%;">
                <td>
                    <div >
                    <package [package]="service.packages[0]" (click)="edit(i)" [routerLink]="service.packages[0]?.ProductId"></package>
                    </div>
                </td>
               <td>
                    <div> 
                    <package [package]="service.packages[1]" (click)="edit(i)" [routerLink]="service.packages[1]?.ProductId"></package>
                    </div>
               </td>
               <td>
                   <div> 
                   <package [package]="service.packages[2]" (click)="edit(i)" [routerLink]="service.packages[2]?.ProductId"></package>
                   </div>
               </td>
            </table>
        </div>
    `
})
export class Package3Component {


    constructor(public service: LiaService) {
       
    }

    edit(i: number) {
        /*for (let j = 0; j < this.packages.length; j++)
            if (j != i)
                this.packages[j].isAny = false;*/
    }

}