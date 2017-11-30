import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl:'cart.component.html',
  styles: ['cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private service:LiaService, public router: Router) { 
this.service.nowComponent="סל";
  }

  ngOnInit() {
  }

}
