import { Component, OnInit } from '@angular/core';
import { LiaService } from '../lia.service';
import { Router,ActivatedRoute } from '@angular/router';
import { sourceUrl } from '@angular/compiler';



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
            <a (click)="this.f()">לוגו</a>
            <img src="../assets/pictures/img-1.png" id="upfile1" style="cursor:pointer;width:50px;height:50px" />
            <input type="file" accept=".jpg, .jpeg, .png"  id="file"  name="file" style="display:none" onchange="this.putImg(this);">
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
  f()
  {
    document.getElementById('file').click();
  }
 
  
  // putImg(img1)
  // {
  //   document.getElementById('upfile1').setAttribute(sourceUrl(img1));
  // }
}
