import { Component, OnInit } from '@angular/core';
import { LiaService } from '../../lia.service';


@Component({
  selector: 'personalForm',
  templateUrl: 'personalForm.component.html',
  styleUrls: ['personalForm.component.scss']
})
export class personalFormComponent  {
  constructor(public service:LiaService)
  {
        this.service.nowComponent="טופס הזמנה";
  }
}
/*

*/