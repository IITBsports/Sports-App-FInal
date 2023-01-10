import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { QrloggerService } from './qrlogger.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  Ldap = new FormControl();

  ngOnInit() {
  }
  
  constructor(private QrLoggerService:QrloggerService,private router: Router) {  }
 //This was the sample json data that would be taken from the backend eventually and converted into the csv file from jon object
  jsonData =  [
      {
        name: "Anil Singh",
        age: 33,
        average: 98,
        approved: true,
        description: "I am active blogger and Author."
      },
      {
        name: 'Reena Singh',
        age: 28,
        average: 99,
        approved: true,
        description: "I am active HR."
      },
      {
        name: 'Aradhya',
        age: 4,
        average: 99,
        approved: true,
        description: "I am an Actor"
      },
    ];
download(){
  let user={
    name:this.Ldap.value
  }
  

  


    this.QrLoggerService.downloadFile(this.jsonData, 'List');
  }
  
}
  

