import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  Inject,
  NgZone,
  OnInit,
} from '@angular/core';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { AdminService } from '../admin/admin.service';
import { RefreshPageService } from '../refresh-page.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  user = null;
  user_string = '';
  id: string;
  getId: any;
  res: any;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    // private adminService: AdminService,
    private RefreshPageService: RefreshPageService,
    fb: FormBuilder,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private cookieService: CookieService,
    private refreshPageService: RefreshPageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
    // this.id = this.router.url.split('/')[2].toLowerCase();
    this.id = '08e5e49c-29e0-4875-a7c7-1411c3284def';

    this.editUserForm = this.formBuilder.group({
      id: [''],
      roll_number: [''],
      type: [''],
      first_name: [''],
      // last_name: [''],
      last_name: [''],
      phone: [''],
      email: [''],
      insti_address: [''],
      program: [''],
      sex: [''],
      work_report: [''],
      certificates: [''],
      followed_tags: [''],
      followed_events: [''],
    });
  }

  ngOnInit(): void {
    // console.log(this.user.image);
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
      console.log(this.user);
    }

    // this.getId = this.router.url.split('/')[3].toLowerCase();
    this.getId = '08e5e49c-29e0-4875-a7c7-1411c3284def';
    // this.getId = '6328b8496ee7da57586feaa3';
    this.refreshPageService.getUserData(this.getId).subscribe((res) => {
      console.log(res);
    });



    this.refreshPageService.getUserData(this.id).subscribe((res) => {
      console.log(res);
      console.log('Hi');
      console.log(this.user.email);
      this.res = this.user;
      this.editUserForm.setValue({
        id: this.getId,
        roll_number: this.res.roll_number,
        type: this.res.type,
        first_name: this.res.first_name,
        last_name: this.res.last_name,
        phone: this.res.phone,
        email: this.res.email,
        insti_address: this.res.insti_adress,
        program: this.res.program,
        sex: this.res.sex,
        work_report: this.res.work_report,
        certificates: this.res.certificates,
        followed_tags: this.res.followed_tags,
        followed_events: this.res.followed_events,

      });

      console.log(this.getId);
      console.log(this.editUserForm.value);
    });
  }
  onUpdate() {
    console.log('Hi2');

    console.log(this.editUserForm.value);
    this.refreshPageService.updateUser(this.getId, this.editUserForm.value);
  }
}
