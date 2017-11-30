import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styles: ['customer.component.scss']
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
