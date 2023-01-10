import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RefreshPageService } from 'src/app/refresh-page.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-query',
  templateUrl: './admin-query.component.html',
  styleUrls: ['./admin-query.component.css']
})
export class AdminQueryComponent implements OnInit {
Queries:any
user: any;
banuser: any;
banuserForm: any;
id: string;

  constructor( public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private adminService: AdminService,
    private refreshPageService: RefreshPageService,
    fb: FormBuilder,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private router: Router) {
      this.banuserForm = this.formBuilder.group({
        BanUser:['']
      });
    }

  ngOnInit() {
    this.adminService.getAllQueries().subscribe(res => {
      this.Queries =res;
     console.log(res)

    });
    this.adminService.getBanUser().subscribe(res => {
      if(res[0] == undefined)
      {
        this.banuser = []
        this.id = ''
      }
      else {
        this.banuser =res[0].BanUser;
        this.id = res[0]._id;
      }
     console.log(this.banuser, this.id)

    });
  }
  delete(id: String) {    console.log('Deleted');

  this.adminService.deleteQuery(id).subscribe((res) => {
    console.log('Deleted');
  });
}
  BanUser(author: String) {    console.log('banned');
  if(!this.banuser.includes(author)){

    this.banuser.push(author)
  }
  this.banuserForm.patchValue({
    BanUser:this.banuser
  });
  console.log(this.banuser)
if(this.id == ''){
  this.adminService.addBanUser(this.banuserForm.value).subscribe(
    () => {
      console.log(this.banuserForm.value);
      location.reload();
    },
    (err) => {
      console.log(err);
    }
  );
}
else{
  this.adminService.updateBanUser(this.id,this.banuserForm.value);
}


  // this.adminService.deleteQuery(author).subscribe((res) => {
  //   console.log('Deleted');
  // });
}
}
