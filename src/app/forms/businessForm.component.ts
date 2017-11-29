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
            <br><br>
            <label class="uploader" ondragover="return false;"
                [class.loaded]="loaded" 
                [style.outlineColor]="dragging ? activeColor : baseColor"
                (dragenter)="handleDragEnter()"
                (dragleave)="handleDragLeave()"
                (drop)="handleDrop($event)">
                
                <i class="icon icon-upload" 
                    [style.color]="dragging 
                        ? ((imageSrc.length > 0) ? overlayColor : activeColor)
                        : ((imageSrc.length > 0) ? overlayColor : baseColor)">
                </i>
                
                <img 
                    [src]="imageSrc" 
                    (load)="handleImageLoad()" 
                    [class.loaded]="imageLoaded"/>              
            </label>
            <input type="file" accept=".jpg, .jpeg, .png"  id="file"  name="file" style="display:none" (change)="this.handleInputChange($event)" (load)="this.handleImageLoad()">
            <img />
            <input placeholder="שעות פתיחה"/>
            </div>
            <button [routerLink]="this.routeOrStay" (click)="continue()">המשך</button>




           
     `,
  styles: [`
          .uploader input {
            display: none;
          }
          
          .uploader 
            {
            -webkit-align-items: center;
            align-items: center;
            background-color: #efefef;
            background-color: rgba(0, 0, 0, 0.02);
            cursor: pointer;
            display: -webkit-flex;
            display: flex;
            height: 150px;
            -webkit-justify-content: center;
            justify-content: center;
            outline: 3px dashed #ccc;
            outline-offset: 5px;
            position: relative;
            width: 150px;
          }
          
          .uploader img,
          .uploader .icon {
            pointer-events: none;
          }
          
          .uploader,
          .uploader .icon {
            -webkit-transition: all 100ms ease-in;
            -moz-transition: all 100ms ease-in;
            -ms-transition: all 100ms ease-in;
            -o-transition: all 100ms ease-in;
            transition: all 100ms ease-in;
          }
          
          .uploader .icon {
            color: #eee;
            color: rgba(0, 0, 0, 0.2);
            font-size: 5em;    }
          
            .uploader img {
            left: 50%;
            opacity: 0;
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            top: 50%;
            -webkit-transition: all 300ms ease-in;
            -moz-transition: all 300ms ease-in;
            -ms-transition: all 300ms ease-in;
            -o-transition: all 300ms ease-in;
            transition: all 300ms ease-in;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            z-index: -1;
          }
          
          .uploader img.loaded {
            opacity: 1;
                  }
      `
    ]
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




  ////////////////////////////////////////////////////
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  iconColor:any;
  borderColor:any;
  handleDragEnter() {
      this.dragging = true;
  }
  
  handleDragLeave() {
      this.dragging = false;
  }
  
  handleDrop(e) {
      e.preventDefault();
      this.dragging = false;
      this.handleInputChange(e);
  }
  
  handleImageLoad() {
      this.imageLoaded = true;
      this.iconColor = this.overlayColor;
  }

  handleInputChange(e) {
      var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

      var pattern = /image-*/;
      var reader = new FileReader();

      if (!file.type.match(pattern)) {
          alert('invalid format');
          return;
      }

      this.loaded = false;

      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(file);
  }
  
  _handleReaderLoaded(e) {
      var reader = e.target;
      this.imageSrc = reader.result;
      this.loaded = true;
  }
  
  _setActive() {
      this.borderColor = this.activeColor;
      if (this.imageSrc.length === 0) {
          this.iconColor = this.activeColor;
      }
  }
  
  _setInactive() {
      this.borderColor = this.baseColor;
      if (this.imageSrc.length === 0) {
          this.iconColor = this.baseColor;
      }
  }
  
//   document.getElementById('picField').onchange = function (evt) {
//     var tgt = evt.target || window.event.srcElement,
//         files = tgt.files;

//     // FileReader support
//     if (FileReader && files && files.length) {
//         var fr = new FileReader();
//         fr.onload = function () {
//             document.getElementById(outImage).src = fr.result;
//         }
//         fr.readAsDataURL(files[0]);
//     }

//     // Not supported
//     else {
//         // fallback -- perhaps submit the input to an iframe and temporarily store
//         // them on the server until the user's session ends.
//     }
// }
// imageLoaded:boolean=false;
// handleImageLoad() {
//   console.log("rr");
//   this.imageLoaded = true;
//  // this.iconColor = this.overlayColor;
// }
  // putImg(img1)
  // {
  //  console.log(img1.target.files[0].name);
   
  //  //this.src+=img1.target.files[0].name;
  //   //document.getElementById('file')
  // }
}
