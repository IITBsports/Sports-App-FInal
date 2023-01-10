import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefreshPageService } from 'src/app/refresh-page.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  Events: any;
  sport: String;
  Event_arr: any;
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private refreshPageService: RefreshPageService,
    private Activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sport = this.router.url.split('/')[2];
    this.refreshPageService.getAllEvents().subscribe((res) => {
      this.Events = res;
      this.Event_arr = [];
      for (let i = 0; i <= this.Events.length; i++) {
        if (this.Events[i].sport == this.sport) {
          this.Event_arr.push(this.Events[i]);
        }
      }
    });
  }
}
