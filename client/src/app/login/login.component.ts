import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RefreshPageService } from '../refresh-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  user_string: any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cookieService: CookieService,
    private refreshPageService: RefreshPageService,
    private router: Router
  ) { }
  loginHref = "https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=H5BclqBYk0P9kOjJXGCXi73uMGrUntQfU4gZMfMk&response_type=code&scope=basic profile program ldap insti_address sex&redirect_uri=http://10.198.49.8:8080/api/login";

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('user-data'));
    this.user_string = localStorage.getItem('user-data');
    if (!this.user) {
      let sessionID = this.cookieService
        .get('mysesCookie')
        .split(':')[1]
        .split('.')[0];
      //console.log(sessionID);
      if (sessionID != undefined) {
        this.user = this.refreshPageService
          .getUserData(sessionID)
          .subscribe((data) => {
            this.user = data;
            this.user_string = JSON.stringify(this.user);
            console.log(this.user);
            if (data != undefined && data != null)
              localStorage.setItem('user-data', JSON.stringify(this.user));
            // Response.redirect('https://localhost:4200');
          });
        (error) => {
          console.log('failied login:', error);
        };
      }
    } else {
      console.log('from localstorage');
      console.log(this.user.is_admin);
    }
    if (this.user != null) {
      // this.router.navigateByUrl('/home');
      this.router.navigateByUrl('/');
    } else {
      // this.router.navigateByUrl('/');
    }
  }

}
