import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-pts',
  templateUrl: './pts.component.html',
  styleUrls: ['./pts.component.css']
})
export class PtsComponent implements OnInit {
  dropdownList = [];
  dropdownList1 = [];
  dropdownSettings: IDropdownSettings = {};
  addPtsForm: FormGroup;
  main: FormGroup;
  typeSelect: string[] = ['Gc','InterIIT'];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private AdminService: AdminService
  ) {
    this.main = this.formBuilder.group({
      type : ['']
    });
    this.addPtsForm = this.formBuilder.group({
      Hostel: [''],
      points: [''],
    });
  }

  ngOnInit(): void {
    this.dropdownList = [
      'Hostel-1',
      'Hostel-2',
      'Hostel-3',
      // 'Hostel-4',
      'Hostel-5',
      'Hostel-6',
      'Hostel-9',
      'Hostel-10',
      'Hostel-11',
      'Hostel-12',
      'Hostel-13',
      'Hostel-14',
      'Hostel-15',
      'Hostel-16',
      'Hostel 17',
      'Hostel 18',
    ];
    this.dropdownList1 = [
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
    this.AdminService.addPts(this.addPtsForm.value).subscribe(
      () => {
        console.log(this.addPtsForm.value);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
