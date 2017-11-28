import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  template: `

  <div>
  <div class="col-md-6">
  <div class="container-lia container">
  <div class="t-center"><i class="icon-arrow-up-05 t-center blue f-size-icon"></i></div>
  
  <div class="border-bottam-table blue" *ngFor="let pr of this.service.productsOfCart">
  <span class="col-md-3 col-xs-3">  {{pr.Duration}}  </span>
  <span class="col-md-4 col-xs-4">  {{pr.DurationText}} </span>
  <span class="col-md-4 col-xs-4">  {{pr.Price}}</span>
  <span class="col-md-1 col-xs-1"><i class="icon-arrow-left-03 blue f-size-icon"></i></span>
  </div>
  
  <div class="t-center"><i class="icon-arrow-down-04 t-center blue f-size-icon"></i></div>
  </div>
  </div>

  <div class="col-md-6 bg-gray">
  <div class="container-lia container">
  <div class="col-md-8 col col-md-offset-2">
  <button class="btn btn-width bg-light-blue">הוסף / שנה חבילה </button>
  <a routerLink="../product">
  <button class="btn btn-width bg-pink">הוסף מוצר </button>
  </a>
  <button class="btn btn-width bg-green">המשך תשלום לקוח קיים </button>
  <button class="btn btn-width bg-blue" routerLink="../personalForm">המשך לתשלום</button>

  </div>
  </div>

  </div>
  `,
  styles: []
})
export class CartComponent implements OnInit {

  constructor(private service:LiaService, public router: Router) { 
this.service.nowComponent="סל";
  }

  ngOnInit() {
  }

}
