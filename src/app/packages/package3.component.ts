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
                <td *ngFor="let p of service.packages let i =index">
                    <div >
                        <package [package]="p" (click)="edit(i)" [routerLink]="p?.ProductId"></package>
                    </div>
                </td>
            </table>
        </div>
    `
})
export class Package3Component {


    constructor(public service: LiaService) {
        if (service.packages === undefined) {
            this.service.post("GetPackages");
            service.packages = service.temp;
        }
    }

    edit(i: number) {
        /*for (let j = 0; j < this.packages.length; j++)
            if (j != i)
                this.packages[j].isAny = false;*/
    }

}