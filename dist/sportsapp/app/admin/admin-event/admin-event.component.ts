import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  NgZone,
  Inject,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AdminService } from '../admin.service';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Injectable } from '@angular/core'; // at top

import { RefreshPageService } from '../../refresh-page.service';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css'],
})
export class AdminEventComponent implements OnInit {
  addEventForm: FormGroup;
  user = null;
  user_string = '';

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = '../assets/img_preview.jpeg';
  editFile: boolean = true;
  removeUpload: boolean = false;
  enteredTitle: any;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [];
  eventWinner: string[] = [];

  allTags: string[] = [
    'Aavhan',
    'Girls',
    'Lawn Tennis',
    'Cricket',
    'Basketball',
    'Athletics',
    'Football',
    'Badminton',
    'Indian Games',
    'Volleyball',
    'Aquatics',
    'Hockey',
    'Chess',
    'Squash',
    'Table Tennis',
    'Weightlifting',
    'H-1',
    'H-2',
    'H-3',
    'H-4',
    'H-5',
    'H-6',
    'H-7',
    'H-8',
    'H-9',
    'H-10',
    'H-11',
    'H-12',
    'H-13',
    'H-14',
    'H-15',
    'H-16',
  ];
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
  bool: string[] = ['Yes', 'No'];
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  submitted: boolean;
  ImageBase64Format: any;
  id: string;

  constructor(
    public formBuilder: FormBuilder,
    private ngZone: NgZone,
    private adminService: AdminService,
    fb: FormBuilder,
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private cookieService: CookieService,
    private refreshPageService: RefreshPageService,
    private router: Router
  ) {
    this.addEventForm = this.formBuilder.group({
      title: [''],
      desc: [''],
      venue: [''],
      date_created: new Date(),
      date: [''],
      sport: [''],
      url: [''],
      insta_url: [''],
      fb_url: [''],
      tags: this.tags,
      image: this.imageUrl,
      isPostEvent: true,
      postEventDescription: [''],
      eventWinner_1 : [''],
      eventWinner_2 : [''],
      eventWinner_3 : [''],
    });
    /*

            isPostEvent: isPostEvent,
            postEventDescription: postEventDescription,
            eventWinner: eventWinner
  */

    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      map((tag: string | null) =>
        tag ? this._filter(tag) : this.allTags.slice()
      )
    );
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
            Response.redirect('https://localhost:4200/admin/event');
          });
        (error) => {
          console.log('failied login:', error);
        };
      }
    } else {
      console.log('from localstorage');
      console.log(this.user);
    }
    this.id = this.router.url.split('/')[3].toLowerCase();

    console.log(this.id);
    console.log('Hi');
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(
      (tag) => tag.toLowerCase().indexOf(filterValue) === 0
    );
  }
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      console.log(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        console.log(this.imageUrl);
        this.editFile = false;
        this.removeUpload = true;
      };
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = '../assets/img_preview.jpeg';
    this.editFile = true;
    this.removeUpload = false;
  }

  // Submit Registration Form
  onSubmit() {
    console.log(this.addEventForm.value);
    this.addEventForm.patchValue({
      tags: this.tags,
      image: this.imageUrl,
    });

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
    this.adminService.addevent(this.addEventForm.value).subscribe(
      () => {
        console.log(this.addEventForm.value);
        // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
