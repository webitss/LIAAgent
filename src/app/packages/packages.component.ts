import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../lia.service";

@Component({
    selector: 'packagesComponent',
    styles: [],
    template: `
    <div>
    <table>
    <td>
    <package  [packageInput]="this.service.packages[0]"></package>
    </td>
    <td>
    <package  [packageInput]="this.service.packages[1]"></package>
    </td>
    <td>
    <package  [packageInput]="this.service.packages[2]"></package>
    </td>
    </table>
    </div>
    `
})
export class PackagesComponent {


constructor(public service: LiaService){

}
 
}
