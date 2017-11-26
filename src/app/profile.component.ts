/*
import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication.service';

@Component({
    selector: 'app-profile',
    template:
    `
    <div class="panel panel-default profile-area">
  <div class="panel-heading">
    <h3>Profile</h3>
  </div>
  <div class="panel-body">
    <img src="{{profile?.picture}}" class="avatar" alt="avatar">
    <div>
      <label><i class="glyphicon glyphicon-user"></i> Nickname</label>
      <h3 class="nickname">{{ profile?.nickname }}</h3>
    </div>
    <pre class="full-profile">{{ profile | json }}</pre>
  </div>
</div>
    `,
    styles:[]
})
export class ProfileComponent implements OnInit {

    profile: any;

    constructor(public auth: AuthService) { }

    ngOnInit() {
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        } else {
            this.auth.getProfile((err, profile) => {
                this.profile = profile;
            });
        }
    }

}*/
