import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { RefreshPageService } from 'src/app/refresh-page.service';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-edit-scores',
  templateUrl: './edit-scores.component.html',
  styleUrls: ['./edit-scores.component.css']
})
export class EditScoresComponent implements OnInit {
  user = null;
  user_string = '';

  EditRunningEventScoreForm: FormGroup;
  main: FormGroup;
  EditAvsBScoreForm: FormGroup;
  selectedItems = [];
  typeofScore: string;
  Eventtype: string;
  sport: string;
  dropdownList = [];
  dropdownList1 = [];
  dropdownSettings: IDropdownSettings = {};
  id: string;
  getId: any;
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
  EditCricketScoreForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private refreshPageService: RefreshPageService,
    private cookieService: CookieService,
    private AdminService: AdminService,
    fb: FormBuilder
  ) {
    this.selectedItems = [];
    this.main = this.formBuilder.group({
      typeofScore: [''],
      type : ['']
    });
    this.id = this.router.url.split('/')[2].toLowerCase();
    this.EditRunningEventScoreForm = this.formBuilder.group({
      // id: [''],
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
    this.EditAvsBScoreForm = this.formBuilder.group({
      // id: [''],
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
    this.EditCricketScoreForm = this.formBuilder.group({
      // id: [''],
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
            Response.redirect('https://localhost:4200/admin');
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
    console.log(this.getId + " YE to meri vali id hai")
    console.log(this.id + " YE to meri vali id hai")
    this.refreshPageService.GetRunningEventScores(this.getId).subscribe((res) => {
      console.log(res);
    });
    this.refreshPageService.GetRunningEventScores(this.id).subscribe((res) => {
      console.log(res);
      this.EditRunningEventScoreForm.setValue({

        sport: res['sport'],
        type: res['type'],
        typeofScore: res['typeofScore'],
        Eventtype: res['Eventtype'],
        match_type: res['match_type'],
        match_title: res['match_title'],
        match_review: res['match_review'],
        Team_1: res['Team_1'],
        Team_1Score: res['Team_1Score'],
        Team_1Name: res['Team_1Name'],
        Team_2: res['Team_1'],
        Team_2Score: res['Team_2Score'],
        Team_2Name: res['Team_2Name'],
        Team_3: res['Team_3'],
        Team_3Score: res['Team_3Score'],
        Team_3Name: res['Team_3Name'],

        Team_4: res['Team_4'],
        Team_4Score: res['Team_4Score'],
        Team_4Name:res['Team_1Name'],
      });
    });
    this.refreshPageService.GetAvsBScores(this.getId).subscribe((res) => {
      console.log(res);
    });
    this.refreshPageService.GetAvsBScores(this.id).subscribe((res) => {
      console.log(res);
      this.EditAvsBScoreForm.setValue({

        sport: res['sport'],
        type: res['type'],
        typeofScore: res['typeofScore'],
        match_type: res['match_type'],
        match_title: res['match_title'],
        match_review: res['match_review'],

        Team_A: res['Team_A'],
        Team_AScore: res['Team_AScore'],
        Team_AName: res['Team_AName'],
        Team_B: res['Team_B'],
        Team_BScore: res['Team_BScore'],
        Team_BName: res['Team_BName'],
      });
    });
    console.log(this.EditAvsBScoreForm.value)
    this.typeofScore;
    this.dropdownList = [
      'Hostel-1',
      'Hostel-2',

      'Hostel-3',
      'Hostel-4',
      'Hostel-5',
      'Hostel-6',
      'Hostel-9',
      'Hostel-10',
      'Hostel-11',
      'Hostel-12',
      'Hostel-13',

      'Hostel-14',
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
    // console.log(this.dropdownList);
    this.dropdownSettings = {
      textField: 'hostel_name',
    };
    console.log(this.EditAvsBScoreForm.value);
  }
  onUpdate() {

    if (this.main.value.typeofScore == 'Running-Event') {
      console.log(this.EditRunningEventScoreForm.value);

      console.log('Running-Event');
      this.AdminService.updateRunningEventScore(this.getId, this.EditRunningEventScoreForm.value);
    }
    if (this.main.value.typeofScore == 'AvsB') {
      console.log('A v/s B');
      this.AdminService.updateAvsBScore(this.getId, this.EditAvsBScoreForm.value);
    }
    if (this.main.value.typeofScore == 'Cricket') {
      console.log('Cricket');
      this.AdminService.updateCricketScore(this.getId, this.EditCricketScoreForm.value);
    }


  }
  onSubmit() {
    console.log('hi');
    if (this.main.value.typeofScore == 'Running-Event') {
      console.log(this.EditRunningEventScoreForm.value);

      console.log('Running-Event');
      this.AdminService.addRunningEventScore(
        this.EditRunningEventScoreForm.value
      ).subscribe(
        () => {
          console.log(this.EditRunningEventScoreForm.value);
        },
        (err) => {
          console.log(err);
        }
      );
    }

    if (this.main.value.typeofScore == 'AvsB') {
      console.log('A v/s B');
      this.AdminService.addAvsBScore(this.EditAvsBScoreForm.value).subscribe(
        () => {
          console.log(this.EditAvsBScoreForm.value);
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
        this.EditCricketScoreForm.value
      ).subscribe(
        () => {
          console.log(this.EditCricketScoreForm.value);
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
