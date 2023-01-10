
import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RefreshPageService } from '../refresh-page.service';
import { CookieService } from 'ngx-cookie';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  Queries:any
  Faqs:any
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cookieService: CookieService,
    private refreshPageService: RefreshPageService,
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private adminService: AdminService,
    fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getAllQueries().subscribe(res => {
      this.Queries =res;
      for (let i = 0; i < this.Queries.length; i++) {
        if (this.Queries[i].status == 2) {

          this.Faqs.append(this.Queries[i]);
        }
      }
      console.log(this.Faqs)

     console.log(res)

    });
  }

}
