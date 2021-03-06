import {Component} from "@angular/core";
import {AuthService} from "./authentication.service";
import {Router} from '@angular/router';

@Component({
    selector: 'logo',
    template: ` 
    
    <div class="bg-login" id="body">
    <div  [ngClass]="{'logo-login': isClassBig, 'logo-login-mini': isClassMini}">
    <img src="assets/pictures/logo-login.png" />
    </div>
        <button routerLink="/login" (click)="mini()" [ngClass]="{'arrow-login-open': isClassBig, 'arrow-login-open-mini': isClassMini}">
        <i [ngClass]="{'icon-arrow-right-02': isClassBig, 'icon-arrow-left-03': isClassMini}"></i></button>
        <div class="gradient-color"></div>
    </div>
   
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

            .hoverbtn:after {
                pointer-events: none;
                position: absolute;
                width: 100%;
                height: 100%;
                content: '';
                -webkit-box-sizing: content-box;
                -moz-box-sizing: content-box;
                box-sizing: content-box;
            }

            .hoverbtn:before {
                speak: none;
                font-size: 48px;
                line-height: 90px;
                font-style: normal;
                font-weight: normal;
                font-variant: normal;
                text-transform: none;
                display: block;
                -webkit-font-smoothing: antialiased;
            }

            /* Effect 8 */
            .hoverbtn.effect-8 {
                background: rgba(0, 0, 0, 0.1);
                -webkit-transition: -webkit-transform ease-out 0.1s, background 0.2s;
                -moz-transition: -moz-transform ease-out 0.1s, background 0.2s;
                transition: transform ease-out 0.1s, background 0.2s;
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

            .hoverbtn.effect-8:hover {
                background: rgba(0, 0, 0, 0.05);
                -webkit-transform: scale(0.93);
                -moz-transform: scale(0.93);
                -ms-transform: scale(0.93);
                transform: scale(0.93);
                color: #000;
            }

            .hoverbtn.effect-8:hover i {
                color: #000;
            }

            .hoverbtn.effect-8:hover:after {
                -webkit-animation: sonarEffect 1.3s ease-out 75ms;
                -moz-animation: sonarEffect 1.3s ease-out 75ms;
                animation: sonarEffect 1.3s ease-out 75ms;
            }

            @-webkit-keyframes sonarEffect {
                0% {
                    opacity: 0.3;
                }
                40% {
                    opacity: 0.5;
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
                }
                100% {
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
                    -webkit-transform: scale(1.5);
                    opacity: 0;
                }
            }

            @-moz-keyframes sonarEffect {
                0% {
                    opacity: 0.3;
                }
                40% {
                    opacity: 0.5;
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
                }
                100% {
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
                    -moz-transform: scale(1.5);
                    opacity: 0;
                }
            }

            @keyframes sonarEffect {
                0% {
                    opacity: 0.3;
                }
                40% {
                    opacity: 0.5;
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
                }
                100% {
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px #3851bc, 0 0 0 10px rgba(255, 255, 255, 0.5);
                    transform: scale(1.5);
                    opacity: 0;
                }
            }
        `
    ]
})
export class LogoComponent {
    constructor(/*public auth: AuthService,*/ public router: Router) {
        /* if (!this.auth.isAuthenticated()) {
             auth.i++;
             //this.auth.login();
             this.router.navigate(['/packages']);
         }*/
        //auth.handleAuthentication();
        this.isClassMini=false;
        this.isClassBig=true;
    }
    isClassMini:boolean;
    isClassBig:boolean;
    ngOnInit() {

    }

    mini() {
        this.isClassMini=!this.isClassMini;
        this.isClassBig=!this.isClassBig;
        if(this.isClassMini==true)
        {
        var body = document.getElementById("body");
        body.style.width = "50%";
        body.style.cssFloat = "right";
        }
        else
        {
            var body = document.getElementById("body");
            body.style.width = "100%";
            //body.style.cssFloat = "right";
        }
        
        //this.router.navigate(['/login']);
    }
}


// <div>
    // <img src="assets/pictures/logo-login.png"/>
    // </div>
    //     <button routerLink="/login" (click)="mini()" >---></button>

