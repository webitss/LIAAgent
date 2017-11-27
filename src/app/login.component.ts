import {Component} from "@angular/core";
import {AuthService} from "./authentication.service";
import {Router} from '@angular/router';

@Component({
  selector: 'login', 
  styles : [],
  template: `
<div>


  <button
            class="btn btn-primary btn-margin"
            routerLink="menu">
        Log In
    </button>
    <button
            class="btn btn-primary btn-margin" >
        Log Out
    </button>

    <input  class="form-control"  placeholder="שם משתמש"/>
    <input class="form-control"  placeholder="סיסמה"/>
    <button type="submit" class="btn btn-default">כניסה</button>
    
    
</div>
`})
export class LoginComponent {

    constructor(/*public auth: AuthService, */public router: Router) {
    //  if (!this.auth.isAuthenticated()) {
    //      auth.i++;
    //      this.auth.login();
    //      auth.handleAuthentication();
    //  }

}


}