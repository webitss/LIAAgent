import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'businessForm',
  template: `
      <p> פרטי עסק</p>
          <div *ngIf="!this.anotherDetails">
          <input placeholder="שם העסק"/>
          <input placeholder='ח"פ'/>
          <input placeholder='טלפון בית העסק'/>
          <input placeholder='כתובת בית העסק'/>
          <input placeholder="כתובת אתר העסק"/>
          <input placeholder="קטגורית עסק"/>
          </div>
            <div *ngIf="this.anotherDetails">
            <a >לוגו</a>
            <img />
            <input placeholder="שעות פתיחה"/>
            </div>
            <button [routerLink]="this.routeOrStay" (click)="continue()">המשך</button>
     `,
  styles: []
})
export class businessFormComponent  {
  anotherDetails:boolean;
  routeOrStay:string;
  constructor(public service:LiaService,public router:Router)
  {
    this.routeOrStay="businessForm"
    this.anotherDetails=false;
  }
  continue(){
    this.anotherDetails=true;
    this.routeOrStay="../pay";
  }
}
