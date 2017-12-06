import {Component, Input, OnDestroy} from "@angular/core";
import {LiaService} from "../../lia.service";
import {Router} from "@angular/router";


@Component({
    selector: 'packagesComponent',
    styleUrls: ['packages.component.scss'],
    templateUrl: 'packages.component.html'
})
export class PackagesComponent {


constructor(public router:Router,public service: LiaService){
this.service.nowComponent="חבילות";
this.service.isOuter=true;
this.service.isInner=false;
this.service.isPackageProductDetailed=false;
}

}
