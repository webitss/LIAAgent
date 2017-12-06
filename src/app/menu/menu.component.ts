import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { Input } from "@angular/core";
import { LiaService } from "../lia.service";

@Component({
    selector: 'menu',

templateUrl:'menu.component.html',
styleUrls: ['menu.component.scss']

})
export class MenuComponent {
    

constructor(public service: LiaService, public router: Router) {
this.userWantOut=false;

}

@Input() userWantOut:boolean;
userWantOutFunc()
{
this.userWantOut=!this.userWantOut;
}
//go to the enter class
goTo() {
this.router.navigate(['menu/enter']);
}
}