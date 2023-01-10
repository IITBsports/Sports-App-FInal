import { Component, NgZone, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RefreshPageService } from './../refresh-page.service';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-detailed-event',
  templateUrl: './detailed-event.component.html',
  styleUrls: ['./detailed-event.component.css']
})
export class DetailedEventComponent implements OnInit {
  getId: any;
  Event: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private RefreshPageService:RefreshPageService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
 
    this.RefreshPageService.GetEvent(this.getId).subscribe(res => {
      this.Event.setValue({
        title: res['title'],
        images: res['images'],
        description: res['description'],
        date: res['date'],
        sport:res['sport'],
        tags:res['tags'],

      });
    });
  }

  ngOnInit() {}


}
