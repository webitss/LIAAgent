import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';


@Component({
  selector: 'personalForm',
  template: `
<p> פרטים אישיים</p>

<form [formGroup]="service.frmPersonal" (ngSubmit)="service.submitFrmPersonal(service.frmPersonal.value)">
<input placeholder="שם לקוח" formControlName="first_name"/>
<input placeholder='ת"ז' formControlName="id"/>
<input placeholder='טלפון' formControlName="phoneNumber"/>
<input placeholder='כתובת' formControlName="address"/>
<input placeholder="מייל" formControlName="email"/>
<input placeholder="נייד" formControlName="callPhone"/>
<a routerLink="../businessForm">
<input type="submit" value="המשך" [disabled]="!service.frmPersonal.valid" >
</a>
</form>

     `,
  styles: []
})
export class personalFormComponent  {
  constructor(public service:LiaService)
  {
        this.service.nowComponent="טופס הזמנה";
  }
}
/*

*/