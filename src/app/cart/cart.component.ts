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
