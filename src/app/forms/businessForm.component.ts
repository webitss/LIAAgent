import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'businessForm',
  template: `
      <p> פרטי עסק</p>

      <div *ngIf="!this.service.anotherDetails" >
      <form [formGroup]="service.frmBusiness" (ngSubmit)="service.submitFrmBusiness(this.service.frmBusiness.value)">
      <input placeholder="שם העסק" formControlName="name"/>
      <input placeholder='ח"פ' formControlName="PrivatelyHeldCompany"/>
      <input placeholder='טלפון בית העסק' formControlName="phone"/>
      <input placeholder='כתובת בית העסק' formControlName="address"/>
      <input placeholder="כתובת אתר העסק" formControlName="websiteAddress"/>
      <input placeholder="קטגורית עסק" formControlName="category"/>
      <input type="submit" value="המשך" [disabled]="!service.frmBusiness.valid" >
      </form>      
      </div>
      
        <div *ngIf="this.service.anotherDetails">
        <form [formGroup]="service.frmMoredetails" (ngSubmit)="service.submitFrmBusiness()">
        <input placeholder="logo" formControlName="logo"/>
        <a >לוגו</a>
        <img />
        <input placeholder="שעות פתיחה" formControlName="OpeningHours"/>
        <a [routerLink]="this.service.routeOrStay">
        <input type="submit" value="המשך" [disabled]="!service.frmMoredetails.valid" >
        </a>
        </form> 
        </div>
      
     `,
  styles: []
})
export class businessFormComponent  {
  

  constructor(public service:LiaService,public router:Router)
  {
     this.service.routeOrStay="businessForm";
     this.service.anotherDetails=false;
  }
  // continue(frm){
  //   this.anotherDetails=true;
  //   this.routeOrStay="../pay";
  // }
}
/*
            <button [routerLink]="this.routeOrStay" (click)="continue()">המשך</button>
*/