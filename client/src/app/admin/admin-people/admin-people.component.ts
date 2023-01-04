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
  selector: 'app-admin-people',
  templateUrl: './admin-people.component.html',
  styleUrls: ['./admin-people.component.css']
})

export class AdminPeopleComponent implements OnInit {
  addPeopleForm: FormGroup;

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  Name: string = '';
  x:string;
  imageUrl: any = "../assets/img_preview.jpeg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  enteredTitle: any;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  sports: string[] = [
    'None',
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
  positions: string[] = [
  'Cabinet',
  'Secretary',
  'Coach',
  'Heads',
  'Team',
  ];
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  submitted: boolean;
  ImageBase64Format: any;

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
    this.addPeopleForm = this.formBuilder.group({
      name: [''],
      about:[''],
      position:[''],
      sport:[''],
    insta_url:[''],
    fb_url:[''],
    phone_no:[''],
    gmail:[''],
      image: this.imageUrl,
    });
  }

  ngOnInit(): void {
  }
  uploadFile(event) {

    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.imageUrl;
        console.log("Hii")

        this.addPeopleForm.patchValue({
          image: reader.result
        },

        );
        this.editFile = false;
        this.removeUpload = true;
      }
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
    this.addPeopleForm.patchValue({
      file: [null]
    });
  }

  // Submit Registration Form
  onSubmit() {
    this.addPeopleForm.patchValue({
      image: this.imageUrl,
    });
    this.adminService.addPeople(this.addPeopleForm.value).subscribe(
      () => {
        console.log(this.addPeopleForm.value);
        // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
