import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { serializePath } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-cart',
  template: `

  <div>
  <div class="col-md-6">
  <div class="container-lia container">
  </div>
  </div>

  <div class="col-md-6 bg-gray">
  <div class="container-lia container">
  <div class="col-md-8 col col-md-offset-2">
  <button class="btn btn-default btn-width bg-light-blue">הוסף / שנה חבילה </button>
  <button class="btn btn-default btn-width bg-pink">הוסף מוצר </button>
  <button class="btn btn-default btn-width bg-green">המשך תשלום לקוח קיים </button>
  <button class="btn btn-default btn-width bg-blue">המשך לתשלום</button>

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
