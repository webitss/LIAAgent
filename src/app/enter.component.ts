import {Component} from "@angular/core";
import {AuthService} from "./authentication.service";

@Component({
    selector: 'enter',
    styles: [
            `
            .back{
                height: 750px;
                width: 1920px;
                background-size: 100vw 100vh;
                background-image: url("../assets/enter.jpg");
                background-repeat: no-repeat;
            }
            .menu {

                position: absolute;
                width: 1920px;
                bottom: 0px;

            }

            div {
                display: inline-block;
                position: relative;
                width: 19%;
                font-family: "Roboto";
                height: 50px;
                text-align: center;
                font-size: 18px;
                font-weight: 400;
                line-height: 50px;
                cursor: pointer;
                text-decoration: none;
                z-index: 1;

            }

            footer {
                padding: 1em;
                clear: left;
            }

            body {
                background: #292929;
                padding-left: 30px;
            }

            .row {
                float: left;
                width: 100%;
            }

            .row .block {
                float: left;
                width: 25%;
                height: 150px;
            }

            /*.hoverbtn {
                display: inline-block;
                font-size: 18px;
                font-weight:400;
                
                cursor: pointer;
                margin: 20px;
                width: 100%;
                font-family:"Roboto";
                height: 90px;
                text-align: center;
                position: relative;
                text-decoration: none;
                z-index: 1;
                color: #fff;
            }*/
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
    ],
    template: `
        <div class="back">
            {{Congratulations}}
            {{loginName}}
        </div>
    `
})
export class EnterComponent {

    loginName: any = "ayala & chaya";
    Congratulations: string;
    date = new Date();
    hour:any;
    constructor(public auth: AuthService) {
        this.hour= this.date.getHours();

           if(this.hour>6&&this.hour<12 )
            this.Congratulations="Good morning";
           else if(this.hour>12&&this.hour<18)
               this.Congratulations="Good afternoon";
           else if(this.hour>18&&this.hour<22)
               this.Congratulations="Good evening";
           else
               this.Congratulations="Good night";
        }
}