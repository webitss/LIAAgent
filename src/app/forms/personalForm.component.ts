import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';


@Component({
  selector: 'personalForm',
  template: `
<p> פרטים אישיים</p>
<input placeholder="שם לקוח"/>
<input placeholder='ת"ז'/>
<input placeholder='טלפון'/>
<input placeholder='כתובת'/>
<input placeholder="מייל"/>
<input placeholder="נייד"/>
<button routerLink="../businessForm">המשך</button>
     `,
  styles: []
})
export class personalFormComponent  {
  constructor(public service:LiaService)
  {
        this.service.nowComponent="טופס הזמנה";
  }
}
