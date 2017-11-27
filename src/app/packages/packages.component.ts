import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../lia.service";

@Component({
    selector: 'packagesComponent',
    styles: [],
    template: `
    <div class="container-lia container">
    <table style="width:100%;">
    <tr>
    <td>
<<<<<<< HEAD
    <package  [package]="this.service.packages[0]"></package>
=======
    <package  [package]="this.service.packages[0]" ></package>
>>>>>>> 520436bd3403e0975c822cbdbab1ae26a152bb47
    </td>
    <td>
    <package  [package]="this.service.packages[1]"></package>
    </td>
    <td>
    <package  [package]="this.service.packages[2]"></package>
    </td>
    </tr>
    </table>

    </div>
    `
})
export class PackagesComponent {


constructor(public service: LiaService){
this.service.nowComponent="חבילות";
}
 
}
