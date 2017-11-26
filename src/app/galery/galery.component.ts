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
             <div><img class="slide-img-galery" [src]=service.galery[i]></div>
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
        this.i=0;
        if (service.galery === undefined) {
            this.service.post("GetGaleryPictures");
            service.galery = service.temp;
        }
    }
   /* constructor( ) {


        this.i=0;

        //this.myPictures.push()
        this.myPictures.push("assets/pictures/bomb2.jpg");
        this.myPictures.push("assets/pictures/childish.jpg");
        this.myPictures.push("assets/pictures/houses.jpg");
        this.myPictures.push("assets/pictures/arrow.jpg");
    }*/
    myPictures:String[]=[];
    ngOnInit() {

    }
    changePicture(right:boolean)
    {
        if(right)
        {
            if(this.i<this.myPictures.length-1)
                this.i++;
        }
        else {
            if(this.i>0)
                this.i--;
        }
    }

}
//<img src="assets/pictures/"${this.myPictures[0]}/>
