import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CookieService } from 'ngx-cookie';
import { RefreshPageService } from 'src/app/refresh-page.service';

@Component({
  selector: 'app-admin-scores',
  templateUrl: './admin-scores.component.html',
  styleUrls: ['./admin-scores.component.css'],
})
export class AdminScoresComponent implements OnInit {
  user = null;
  user_string = '';


  addRunningEventScoreForm: FormGroup;
  main: FormGroup;
  addAvsBScoreForm: FormGroup;
  selectedItems = [];
  typeofScore: string;
  Eventtype: string;
  sport: string;
  dropdownList = [];
  dropdownList1 = [];
  dropdownSettings: IDropdownSettings = {};
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
  type: string[] = ['Running-Event', 'AvsB', 'Cricket'];
  typeSelect: string[] = ['Gc','InterIIT'];
  matchType: string[] = ['Group', 'Quater-Finals', 'Semi-Finals', 'Finals'];

  runningEventtype: string[] = ['m', 'cm', 'sec', 'ms', 'Kgs', 'g'];
  addCricketScoreForm: FormGroup;
  id: string;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private AdminService: AdminService,
    private cookieService: CookieService,
    private refreshPageService: RefreshPageService,
    fb: FormBuilder
  ) {
    this.selectedItems = [];
    this.main = this.formBuilder.group({
      typeofScore: [''],
      type : ['']
    });
    // this.id = this.router.url.split('/')[2].toLowerCase();
    this.addRunningEventScoreForm = this.formBuilder.group({
      sport: [''],
      type: [''],
      typeofScore: [''],
      Eventtype: [''],
      match_type: [''],
      match_title: [''],
      match_review: [''],
      Team_1: [this.selectedItems],
      Team_1Score: [],
      Team_1Name: [''],
      Team_2: [this.selectedItems],
      Team_2Score: [],
      Team_2Name: [''],
      Team_3: [this.selectedItems],
      Team_3Score: [],
      Team_3Name: [''],

      Team_4: [this.selectedItems],
      Team_4Score: [],
      Team_4Name: [''],
    });
    this.addAvsBScoreForm = this.formBuilder.group({
      sport: [''],
      type: [''],
      typeofScore: [''],
      match_type: [''],
      match_title: [''],
      match_review: [''],
      Team_A: [''],
      Team_AScore: [],
      Team_AName: [''],
      Team_B: [''],
      Team_BScore: [],
      Team_BName: [''],
    });
    this.addCricketScoreForm = this.formBuilder.group({
      sport: [''],
      type: [''],
      typeofScore: [''],
      match_type: [''],
      match_title: [''],
      match_review: [''],
      Team_a: [''],
      Team_aRuns: [],
      Team_awickets: [],
      Team_b: [''],
      Team_bRuns: [],
      Team_bwickets: [],
    });
  }

  ngOnInit() {
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
            Response.redirect('https://localhost:4200/admin/scores');
          });
        (error) => {
          console.log('failied login:', error);
        };
      }
    } else {
      console.log('from localstorage');
      console.log(this.user);
    }
    // this.id = this.router.url.split('/')[3].toLowerCase();

    console.log(this.id);


    this.typeofScore;
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
      'Hostel-17',
      'Hostel-18',
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
    console.log(this.dropdownList);
    this.dropdownSettings = {
      textField: 'hostel_name',
    };
    console.log(this.addAvsBScoreForm.value);
  }

  onSubmit() {
    console.log('hi');
    if (this.main.value.typeofScore == 'Running-Event') {
      console.log(this.addRunningEventScoreForm.value);

      console.log('Running-Event');
      this.AdminService.addRunningEventScore(
        this.addRunningEventScoreForm.value
      ).subscribe(
        () => {
          console.log(this.addRunningEventScoreForm.value);
        },
        (err) => {
          console.log(err);
        }
      );
    }

    if (this.main.value.typeofScore == 'AvsB') {
      console.log('A v/s B');
      this.AdminService.addAvsBScore(this.addAvsBScoreForm.value).subscribe(
        () => {
          console.log(this.addAvsBScoreForm.value);
          // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
        },
        (err) => {
          console.log(err);
        }
      );
    }
    if (this.main.value.typeofScore == 'Cricket') {
      console.log('Cricket');
      this.AdminService.addCricketScore(
        this.addCricketScoreForm.value
      ).subscribe(
        () => {
          console.log(this.addCricketScoreForm.value);
          // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  //  title: [''],
  //  desc: [''],
  //  venue: [''],
  //  date_created: new Date(),
  //  author_id:[''],
  //  date:[''],
  //  tags:this.tags.values,
  //  image:this.imageUrl
  // this.adminService.addEvent(this.addEventForm.value)
  // .subscribe(() => {
  //     console.log(this.addEventForm.value)
  //     this.ngZone.run(() => this.router.navigateByUrl('/'))
  //   }, (err) => {
  //     console.log(err);
  // });
}
