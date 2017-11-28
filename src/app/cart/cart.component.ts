import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-cart',
  template: `

  <div>
  <div class="col-md-6">
  <div class="container-lia container">
  <div class="t-center"><i class="icon-arrow-up-05 t-center blue f-size-icon"></i></div>
  
  <div class="border-bottam-table blue">
  <span class="col-md-3 col-xs-3">שם העסק</span>
  <span class="col-md-4 col-xs-4">כתובת</span>
  <span class="col-md-4 col-xs-4">חבילת כרטסים שברשותו</span>
  <span class="col-md-1 col-xs-1"><i class="icon-arrow-left-03 blue f-size-icon"></i></span>
  </div>
  
  <div class="t-center"><i class="icon-arrow-down-04 t-center blue f-size-icon"></i></div>
  </div>
  </div>

  <div class="col-md-6 bg-gray">
  <div class="container-lia container">
  <div class="col-md-8 col col-md-offset-2">
  <button class="btn btn-width bg-light-blue">הוסף / שנה חבילה </button>
  <button class="btn btn-width bg-pink">הוסף מוצר </button>
  <button class="btn btn-width bg-green">המשך תשלום לקוח קיים </button>
  <button class="btn btn-width bg-blue">המשך לתשלום</button>

  </div>
  </div>

  </div>
  `,
  styles: []
})
export class CartComponent implements OnInit {

  constructor(private service:LiaService) { 
this.service.nowComponent="סל";
  }

  ngOnInit() {
  }

}
