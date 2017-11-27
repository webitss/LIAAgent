import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LiaService} from "../lia.service";

@Component({
    selector: 'app-galery',
    template: `
        <div class="container-lia container">
            <div class="col-md-2 arrow-img-galery">
            <i class="icon-arrow-right-02" (click)="this.changePicture(true)"></i>
            </div>

            <div class="myDiv col-md-8">
             <div><img class="slide-img-galery" [src]=this.service.galeryPictures[i]></div>
             </div>

            <div class="col-md-2 arrow-img-galery">
            <i class="icon-arrow-left-03" (click)="this.changePicture(false)"></i>
            </div>
            

        </div>

    `,
})
export class GaleryComponent implements OnInit {
    i:number;
    constructor(public service: LiaService) {
       // this.myPictures=new Array();
        this.i=0;
        //this.myPictures = service.galeryPictures;
       
    }
   
    //myPictures:any[];
    ngOnInit() {

    }
    changePicture(right:boolean)
    {
        if(right)
        {
            if(this.i<this.service.galeryPictures.length-1)
                this.i++;
        }
        else {
            if(this.i>0)
                this.i--;
        }
    }

}
//<img src="assets/pictures/"${this.myPictures[0]}/>
