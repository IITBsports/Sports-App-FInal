import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AdminService } from '../admin.service';
@Component({
  selector: 'app-pts-interiit',
  templateUrl: './pts-interiit.component.html',
  styleUrls: ['./pts-interiit.component.css']
})
export class PtsInteriitComponent implements OnInit {
  dropdownList = [];
  dropdownSettings: IDropdownSettings = {};
  addInteriitPtsForm: FormGroup;


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private AdminService: AdminService
  ) {
    this.addInteriitPtsForm = this.formBuilder.group({
      College: [''],
      points: [''],
    });
  }

  ngOnInit(): void {
    this.dropdownList = [
      'IIT Bombay',
      'IIT Madras',
      'IIT Kanpur',
      'IIT Delhi',
      'IIT Roorkee',
      'IIT Kgp',
      'IIT Guwahati',
      'IIT Hyderabad',
      'IIT Dhanbad',
      'IIT Ropar',
      'IIT Goa',
      'IIT Jammu',
      'IIT Patna',
      'IIT BHU',
      'IIT Jodhpur',
      'IIT Bhuvaneshwar',
      'IIT Mandi',
      'IIT Dharwad'
    ];
  }
  onSubmit() {
    this.AdminService.addInteriitPts(this.addInteriitPtsForm.value).subscribe(
      () => {
        console.log(this.addInteriitPtsForm.value);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
