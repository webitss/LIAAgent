import {Component} from '@angular/core';
import { LiaService } from './lia.service';


@Component({
    selector: 'videoComponent',
    template: `        
     <div>
     <input type="button" value="x" routerLink="../">     
     <video width="1500" height="700" autoplay>
         
         <source src="../../assets/2017-11-01-VIDEO-00000908.mp4" type="video/mp4 ">
     </video>
 </div>
    `,
    styles: []
})
export class VideoComponent {


    constructor(public service: LiaService) {
        console.log("kkkkkkkkkkkkkkk");
       // console.log(this.service.thisProductDetails.VideoUrl);
        console.log("llllllllllll");
    }
}


//<source [src]="this.service.thisProductDetails.VideoUrl" type="video/mp4 ">