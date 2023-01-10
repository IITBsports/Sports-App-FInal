import { Component, Inject, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { RefreshPageService } from './refresh-page.service';
import { DOCUMENT } from '@angular/common';

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  activeLink = "EF";
  user = null;
  user_string = '';
  x = '';
  loggedin: boolean = true;
  constructor(@Inject(DOCUMENT) private document: Document, private cookieService: CookieService, private refreshPageService: RefreshPageService){}
  loginHref = "https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=H5BclqBYk0P9kOjJXGCXi73uMGrUntQfU4gZMfMk&response_type=code&scope=basic profile program ldap insti_address sex&redirect_uri=http://10.198.49.8:8080/api/login";
  ngOnInit(){


    this.user =JSON.parse(localStorage.getItem('user-data'));
    this.user_string = localStorage.getItem('user-data');
    if(!this.user){

      let sessionID = this.cookieService.get("mysesCookie").split(":")[1].split(".")[0];
     //console.log(sessionID);
      if(sessionID != undefined){
        this.user = this.refreshPageService.getUserData(sessionID).subscribe((data)=>{
          this.user = data;
          console.log("Hi")
          this.user_string = JSON.stringify(this.user);
          console.log(this.user);
          if(data != undefined && data !=null)
          localStorage.setItem('user-data', JSON.stringify(this.user));
          Response.redirect("https://10.198.49.8/sportsapp")
        });
        (error)=>{
          console.log("failied login:", error);
        }
      }
    }
    else{
    console.log("from localstorage");
    console.log(this.user);}
  }

  logout(){
    this.cookieService.removeAll();
    localStorage.removeItem('user-data');
    window.location.reload();
  }


  /*SSO_login(){

  }*/
}
