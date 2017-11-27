import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';

@Component({
  selector: 'app-customer',
  template: `
    <p>
      customer works!
    </p>

    <div class="container-lia container">
<div class="col-md-6 col-xs-6">
<div ><i class="icon-arrow-up-05 t-center green"></i></div>

<div class="col-md-3 col-xs-3">שם העסק</div>
<div class="col-md-4 col-xs-4">כתובת</div>
<div class="col-md-4 col-xs-4">חבילת כרטסים שברשותו</div>
<div class="col-md-1 col-xs-1"><i class="icon-arrow-left-03"></i></div>

<div ><i class="icon-arrow-down-04 t-center green"></i></div>
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
