/*

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {Component} from "@angular/core";

@Component({
  selector: 'ping',
  styles : [],
  template: `
<div>
  
</div>
`})
export class PingComponent {  API_URL: string = 'http://webit-login2.auth0.com/api';
    message: string;

    constructor(public authHttp: AuthHttp) {}

    public securedPing(): void {
        this.message = '';
        this.authHttp.get(`${this.API_URL}/private`)
            .map(res => res.json())
            .subscribe(
                data => this.message = data.message,
                error => this.message = error
            );
    } }*/
