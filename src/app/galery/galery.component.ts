import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LiaService} from "../lia.service";

@Component({
    selector: 'app-galery',
    templateUrl: 'galery.component.html',
})
export class GaleryComponent implements OnInit {
    i:number;
    constructor(public service: LiaService) {
      this.service.nowComponent="גלריה";
        this.i=0;
        
       
    }
   
    
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