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
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {

  addBlogForm: FormGroup;

  /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  blogTitle: string = '';
  x:string;
  imageUrl: any = "../assets/img_preview.jpeg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  enteredTitle: any;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredTags: Observable<string[]>;
  tags: string[] = [
  ];
  allTags: string[] = ['Aavhan', 'General Championship','Inter-IIT' ,'Girls', 'Lawn Tennis', 'Cricket', 'Basketball','Athletics',
  'Football','Badminton','Indian Games','Volleyball','Aquatics','Hockey','Chess','Squash',
  'Table Tennis', 'Weightlifting','H-1','H-2','H-3','H-4','H-5','H-6','H-7','H-8','H-9',
  'H-10','H-11','H-12','H-13','H-14','H-15','H-16'];

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
    this.addBlogForm = this.formBuilder.group({
      blogTitle: [''],
      blogContent: [''],
      date_created: new Date(),
      tags: this.tags,
      image: this.imageUrl,
      // venue: [''],
      // image:['']
    });

    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      map((tag: string | null) =>
        tag ? this._filter(tag) : this.allTags.slice()
      )
    );
  }

  ngOnInit() {
    }
//THIS CODE IS FOR ADDING TAGS//
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

    return this.allTags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
//TAGS END HERE//



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

        this.addBlogForm.patchValue({
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
    this.addBlogForm.patchValue({
      file: [null]
    });
  }

  // Submit Registration Form
  onSubmit() {
    this.addBlogForm.patchValue({
      tags: this.tags,
      image: this.imageUrl,
    });
    console.log(this.tags)
    this.adminService.addBlog(this.addBlogForm.value).subscribe(
      () => {
        console.log(this.addBlogForm.value);
        this.router.navigate(['/admin']);
        // this.ngZone.run(() => this.router.navigateByUrl('/admin'))
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
