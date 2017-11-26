
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import {ReturnStatement} from "@angular/compiler";

@Injectable()
export class AuthService {
i:number=0;
    auth0 = new auth0.WebAuth({
        clientID: 'G3MZp_PhdaYkWjRK0zX_A7O49HbU9aRR',
        domain: 'webit-login2.auth0.com',
        responseType: 'token id_token',
        audience: 'https://webit-login2.auth0.com/userinfo',
        redirectUri: 'http://localhost:4204/menu',
        scope: 'openid'
    });

    constructor(public router: Router) {}

    public login(): void {
        this.auth0.authorize();
    }
    public handleAuthentication(): void {
        console.log("ccccccccccccccccccccccc");
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                console.log("sssssssssssssss");
                window.location.hash = '';
                this.setSession(authResult);
                console.log(authResult);
                this.router.navigate(['/logo']);
            } else if (err) {
                console.log("eeeeeeeeeeeeeee");
                this.router.navigate(['/']);
                console.log(err);
            }
            else{
                console.log("ooooooooooooooo");
            }
            console.log("vvvvvvvvvvvvvvvvvvvv");
        });
    }

    private setSession(authResult): void {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        console.log(authResult.accessToken);
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
public  getSession(): any {

    console.log((JSON.parse(localStorage.getItem('access_token'))).token);
    var currentUser = JSON.parse(localStorage.getItem('access_token'));
    return  currentUser.token;
}
}