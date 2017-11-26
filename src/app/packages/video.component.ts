import {Component, Input, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {LiaService} from "../lia.service";

@Component({
    selector: 'videoComponent',
    styles: [],
    template: `
        <input type="button" value="x" routerLink="../">
        <div>
            <video width="1500" height="700" autoplay>
                <source [src]="service.src" type="video/mp4 ">
                <!--<source src="../../assets/2017-11-01-VIDEO-00000908.mp4" type="video/mp4 ">-->
            </video>
        </div>
    `
})
export class videoComponentComponent {


constructor(public service: LiaService){}
  /*  constructor(private route: ActivatedRoute, public service: LiaService) {
        this.sub = route.params.subscribe(params => {
            this.src = params.num;
        });

    }*/
}