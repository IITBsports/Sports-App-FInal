import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  loginHref = "https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=H5BclqBYk0P9kOjJXGCXi73uMGrUntQfU4gZMfMk&response_type=code&scope=basic profile program ldap insti_address sex&redirect_uri=http://10.198.49.8:8080/api/login";

  ngOnInit(): void {
  }

}
