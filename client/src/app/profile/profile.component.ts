import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { SlideInOutAnimation } from './animations';
import { RefreshPageService } from '../refresh-page.service';
import { CookieService } from 'ngx-cookie';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
export interface Tile {
  title: string;
  cols: number;
  rows: number;
  color: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [SlideInOutAnimation],
})
export class ProfileComponent implements OnInit {
  user = null;
  Queries:any
  user_string = '';
  animation_state1 = 'out';
  animation_state2 = 'out';
  Events: any = [];
  sports: string[] = [
    'Aquatics',
    'Athletics',
    'Badminton',
    'Basketball',
    'Cricket',
    'Table-Tennis',
    'Lawn-Tennis',
    'Squash',
    'Indian-Games',
    'Hockey',
    'Football',
    'Weightlifting',
    'Board-Games',
  ];
  queryForm: any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cookieService: CookieService,
    private refreshPageService: RefreshPageService,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private adminService: AdminService,
    fb: FormBuilder,
    private router: Router
  ) {
    this.queryForm = this.formBuilder.group({
      subject: [''],
      sport: [''],
      detail: [''],
      // venue: [''],
      status:0,
      feedback:[''],
      author:['']
    });
  }
  loginHref =
    'https://gymkhana.iitb.ac.in/profiles/oauth/authorize/?client_id=13leStzGZlsbAqkY7mby3AFIueoR3HtbAIdfAZ54&response_type=code&scope=basic profile program ldap insti_address sex&redirect_uri=http://localhost:8080/api/login';
  ngOnInit() {
    this.adminService.getAllQueries().subscribe(res => {

      this.Queries =res;
     console.log(res)

    });

    this.refreshPageService.getAllEvents().subscribe(res => {
      console.log(res)
      this.Events =res;

      console.log(this.Events)
      console.log(this.Events.title);
      console.log(this.Events.tags);
    });
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
            Response.redirect('https://localhost:4200');
          });
        (error) => {
          console.log('failied login:', error);
        };
      }
    } else {
      console.log('from localstorage');
      console.log(this.user);
    }
  }
  myfunc(id: String) {
    if (id === 'toggle_button1') {
      this.animation_state1 = this.animation_state1 === 'in' ? 'out' : 'in';
      if (this.animation_state1 == 'in')
        document.getElementById('toggle_button1').innerHTML = 'Show Less';
      else document.getElementById('toggle_button1').innerHTML = 'Show More';
    }
    if (id === 'toggle_button2') {
      this.animation_state2 = this.animation_state2 === 'in' ? 'out' : 'in';
      if (this.animation_state2 == 'in')
        document.getElementById('toggle_button2').innerHTML = 'Show Less';
      else document.getElementById('toggle_button2').innerHTML = 'Show More';
    }
  }
  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.refreshPageService.deleteEvent(id).subscribe((res) => {
        this.Events.splice(i, 1);
      });
    }
  }
  logout() {
    this.cookieService.removeAll();
    localStorage.removeItem('user-data');
    window.location.reload();
  }
  generate(){
    return Math.floor(Math.random() * 7) + 1;
  }
  onSubmit(){
    this.queryForm.patchValue({
      author:this.user.roll_number
    });
    this.refreshPageService.addQuery(this.queryForm.value).subscribe(
      () => {
        console.log(this.queryForm.value);
        // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
