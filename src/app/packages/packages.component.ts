import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../lia.service";
import {Router} from "@angular/router";


@Component({
    selector: 'packagesComponent',
    styles: [],
    template: `
    <div class="container-lia container">
    <table style="width:100%;">
    <tr>
    <td>
    <package  [package]="this.service.packages[0]" [routerLink]="this.service.packages[0]?.ProductId" (click)="this.changeSize()"></package>
    </td>
    <td>
    <package  [package]="this.service.packages[1]" [routerLink]="this.service.packages[1]?.ProductId" (click)="this.changeSize()"></package>
    </td>
    <td>
    <package  [package]="this.service.packages[2]" [routerLink]="this.service.packages[2]?.ProductId" (click)="this.changeSize()"></package>
    </td>
    </tr>
    </table>

    </div>
    `
})
export class PackagesComponent {


constructor(public router:Router,public service: LiaService){
this.service.nowComponent="חבילות";
}
changeSize()
{
    this.service.isOuter=false;
    this.service.isInner=true;
}
}
