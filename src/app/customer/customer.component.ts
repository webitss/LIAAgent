import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';

@Component({
  selector: 'app-customer',
  template: `
   
    <div class="container-lia container">
<div class="col-md-6 col-xs-6">

<div class="t-center"><i class="icon-arrow-up-05 t-center green f-size-icon"></i></div>

<div class="border-bottam-table green" *ngFor="let p of this.service.customers">
    <div (click)="customerClicked()">
        <span class="col-md-3 col-xs-3">{{p.name}}</span>
        <span class="col-md-4 col-xs-4">{{p.address}}</span>
        <span class="col-md-4 col-xs-4">{{p.num}}</span>
        <span class="col-md-1 col-xs-1"><i class="icon-arrow-left-03 green f-size-icon"></i></span>
    </div>
</div>
<div *ngIf="this.allowDetails">
<p>uuuuuuuuu</p>
</div>
<div class="t-center"><i class="icon-arrow-down-04 t-center green f-size-icon"></i></div>
</div>

<div class="col-md-6 col-xs-6">
<div>
<input placeholder="חיפוש לקוח קיים"/>
</div>
<button routerLink="../cart">{{this.valueButton}}</button>
</div>



    </div>



  `,
  styles: []
})
export class CustomerComponent implements OnInit {
  valueButton:string;
  allowDetails:boolean;
  constructor(private service:LiaService) { 
    this.valueButton="לקוח חדש";
    this.service.nowComponent="לקוחות";
    this.allowDetails=false;
  }
  customerClicked(){
    this.allowDetails=!this.allowDetails;
    this.valueButton=this.valueButton==="לקוח חדש"?"עבור לסל":"לקוח חדש";
    }
  ngOnInit() {
  }

}
