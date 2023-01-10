import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RefreshPageService } from 'src/app/refresh-page.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-query',
  templateUrl: './edit-query.component.html',
  styleUrls: ['./edit-query.component.css']
})
export class EditQueryComponent implements OnInit {

  queries:any
  id: string;
  getId: any;
  user = null;
  user_string = '';
  editQueryForm: any;
  bool: Number[] = [2,1,0];
  constructor( public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private adminService: AdminService,
    private refreshPageService: RefreshPageService,
    fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private cookieService: CookieService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {
      this.editQueryForm = this.formBuilder.group({
        subject: [''],
        sport: [''],
        detail: [''],
        status:0,
        feedback:[''],
        author:['']
      });
    }

  ngOnInit(): void {

    this.id = this.router.url.split('/')[3].toLowerCase();
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

    this.getId = this.router.url.split('/')[3].toLowerCase();
    this.refreshPageService.GetQuery(this.getId).subscribe((res) => {
      console.log(res);
    });
    this.refreshPageService.GetQuery(this.id).subscribe((res) => {
      console.log(res);
        this.queries =res;



      // this.http
      //   .get('/assets/Inter-IIT Pre Camp Trials.jpeg', { responseType: 'blob' })
      //   .subscribe((res) => {
      //     const reader = new FileReader();
      //     reader.onloadend = () => {
      //       var base64data = reader.result;
      //       console.log(base64data);
      //     };
      //     reader.readAsDataURL(res);
      //     this.ImageBase64Format = res;
      //   });
      // console.log(this.ImageBase64Format);
      this.editQueryForm.setValue({
        subject: res['subject'],
        detail: res['detail'],
        // venue: res['venue'],
        sport: res['sport'],
        status:res['status'],
        feedback:res['feedback'],
        author:res['author']
      });
    });

  }
  onUpdate(){
    console.log(this.editQueryForm.value);
    this.adminService.updatequery(this.getId, this.editQueryForm.value);
  }

  delete(id: String) {
       console.log('Deleted');

  this.adminService.deleteQuery(id).subscribe((res) => {
    console.log('Deleted');
  });
}}
