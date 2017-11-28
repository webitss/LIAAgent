import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';

@Component({
  selector: 'app-customer',
  template: `
   
    <div class="container-lia container">
<div class="col-md-6 col-xs-6">

<div class="t-center"><i class="icon-arrow-up-05 t-center green f-size-icon"></i></div>

<div class="border-bottam-table green">
<span class="col-md-3 col-xs-3">שם העסק</span>
<span class="col-md-4 col-xs-4">כתובת</span>
<span class="col-md-4 col-xs-4">חבילת כרטסים שברשותו</span>
<span class="col-md-1 col-xs-1"><i class="icon-arrow-left-03 green f-size-icon"></i></span>
</div>

<div class="t-center"><i class="icon-arrow-down-04 t-center green f-size-icon"></i></div>
</div>

<div class="col-md-6 col-xs-6"></div>



    </div>



  `,
  styles: []
})
export class CustomerComponent implements OnInit {

  constructor(private service:LiaService) { 
    this.service.nowComponent="לקוחות";
  }

  ngOnInit() {
  }

}
