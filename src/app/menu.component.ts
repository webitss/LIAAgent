import {Component} from "@angular/core";
import {AppService} from "./app.service";
import {Router} from "@angular/router";

@Component({
    //selector: 'menu',

    template: `
       
        <div class="myHeader">
        <div class="col-md-4 col-xs-4">
            <img src="assets/pictures/logo-header.png" class="logo-header"/>
            </div>
            <div class="col-md-4 col-xs-4">
            <p class="header-name">{{thisComponent}}</p>
            </div>
            <div class="col-md-4 col-xs-4">
            <div class="user-name">
            <span>ינון שיבולי</span>
            <i class="icon-user-11" (click)="this.goTo()"></i>
            </div>
            </div>
        </div>

       

        <footer class="menu-footer">
            
           <ul>
            <li routerLink="galery" class="hoverbtn effect-8 btn-footer" (click)="this.currentComponent('galery')">
            <span>גלריה </span>
            <i class="icon-image-10"></i>
            </li>
           
            <li routerLink="packages3" class="hoverbtn effect-8 btn-footer" (click)="this.currentComponent('packages')">
            <span>חבילות </span>
            <i class="icon-menu-09"></i>
            </li>

            <li routerLink="product" class="hoverbtn effect-8 btn-footer" (click)="this.currentComponent('products')">
            מוצרים
            <i class="icon-bag-08"></i>
            </li>

            <li routerLink="customer" class="hoverbtn effect-8 btn-footer" (click)="this.currentComponent('customers')">
            לקוחות
            <i class="icon-people-07"></i>
            </li>

            <li routerLink="cart" class="hoverbtn effect-8 btn-footer" (click)="this.currentComponent('cart')">
            <span>סל</span>
             <i class="icon-Cart-06"></i>
             </li>


             </ul>
        </footer>

        <router-outlet></router-outlet>
      
    `,
    styles: [
            `
           
        
            .hoverbtn.small {
                font-size: 20px;
                line-height: 45px;
                width: 100%;
                height: 45px;
                margin: 7px;
            }

            .hoverbtn.mini {
                font-size: 15px;
                line-height: 32px;
                width: 100%;
                height: 30px;
                margin: 7px;
            }

            .hoverbtn.auto-width {
                width: auto;
                height: auto;
                padding: 15px;
            }

            /*.hoverbtn:after {
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                content: '';
                -webkit-box-sizing: content-box;
                -moz-box-sizing: content-box;
                box-sizing: content-box;
            }

            .hoverbtn.effect-8:after {
                top: 0;
                left: 0;
                padding: 0;
                z-index: -1;
                box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
                opacity: 0;
                -webkit-transform: scale(0.9);
                -moz-transform: scale(0.9);
                -ms-transform: scale(0.9);
                transform: scale(0.9);
            }

            

            .hoverbtn.effect-8:hover:after {
                -webkit-animation: sonarEffect 1.3s ease-out 75ms;
                -moz-animation: sonarEffect 1.3s ease-out 75ms;
                animation: sonarEffect 1.3s ease-out 75ms;
            }
*/
            
        `
    ]
})
export class MenuComponent {
    thisComponent: String;

    constructor(public service: AppService, public router: Router) {

    }

    currentComponent(mystring) {
        this.service.changeCurrentComponent(mystring);
        switch (this.service.currentComponent) {
            case 0:
                this.thisComponent = "galery";
                break;
            case 1:
                this.thisComponent = "packages";
                break;
            case 2:
                this.thisComponent = "products";
                break;
            case 3:
                this.thisComponent = "customers";
                break;
            case 4:
                this.thisComponent = "cart";
                break;

        }
    }

    //go to the enter class
    goTo() {
        this.router.navigate(['enter']);
    }
}