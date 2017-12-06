import { Component, OnInit } from '@angular/core';
import { LiaService } from '../../lia.service';
import { Router,ActivatedRoute } from '@angular/router';
import { sourceUrl } from '@angular/compiler';



@Component({
  selector: 'businessForm',
  templateUrl: 'businessForm.component.html',
  styles: ['businessForm.component.scss']
})
export class businessFormComponent  {
  
  activeColor: string = 'green';
  baseColor: string = '#ccc';
  overlayColor: string = 'rgba(255,255,255,0.5)';
  
  dragging: boolean = false;
  loaded: boolean = false;
  imageLoaded: boolean = false;
  imageSrc: string = '';
  iconColor:any;
  borderColor:any;

  constructor(public service:LiaService,public router:Router)
  {
     this.service.routeOrStay="businessForm";
     this.service.anotherDetails=false;
  }
  // continue(frm){
  //   this.anotherDetails=true;
  //   this.routeOrStay="../pay";
  
 
  f()
  {
    document.getElementById('file').click();
  }




  
  
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

/*
            <button [routerLink]="this.routeOrStay" (click)="continue()">המשך</button>
*/