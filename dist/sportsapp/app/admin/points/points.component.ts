import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
})
export class PointsComponent implements OnInit {
  dropdownList = [];
  dropdownList1 = [];
  dropdownSettings: IDropdownSettings = {};
  addPointsForm: FormGroup;
  selectedItems = [];
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

    this.addPointsForm = this.formBuilder.group({
      title: [''],
      sport:[''],
      first_place: [''],
      second_place: [''],
      third_place: [''],
      fourth_place: [''],
    });
  }
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


  ngOnInit() {
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
      'IIT Kharagpur',
      'IIT BHU',
      'IIT Guwahati',
      'IIT Roorkee',
    ];
    // this.dropdownList1 = [
    //   'Aquatics',
    //   'Athletics',
    //   'Badminton',
    //   'Basketball',
    //   'Board Games',
    //   'Cricket',
    //   'Football',
    //   'Hockey',
    //   'Indian Games',
    //   'Lawn Tennis',
    //   'Squash',
    //   'Table Tennis',
    //   'Volleyball',
    //   'Weightlifting',
    // ]
  }
  onSubmit() {
    this.AdminService.addPoints(this.addPointsForm.value).subscribe(
      () => {
        console.log(this.addPointsForm.value);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
