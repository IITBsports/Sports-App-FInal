import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RefreshPageService } from '../refresh-page.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  user = null;
  user_string = '';
  Events: any = [];
  send_id: String;
  event: any;
  image: String;
  title: String;
  description: String;
  date: String;
  tags: [String];
  interested_count: Number;
  self_interested = 0;
  id: string;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private refreshPageService: RefreshPageService,
    private cookieService: CookieService,
    private router: Router,
    private Activatedroute: ActivatedRoute
  ) {
    console.log('Hello');
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
            Response.redirect('https://localhost:4200');
          });
        (error) => {
          console.log('failied login:', error);
        };
      }
    } else {
      console.log('from localstorage');
      console.log(this.user);
    }

    this.id = this.router.url.split('/')[2].toLowerCase();
    // console.log(this.id)
    //     this.event = this.refreshPageService.GetEvent(this.id).subscribe(res => {
    //     console.log(this.event);
    //     this.image = this.event.image;
    //     this.title = this.event.title;
    //     this.description = this.event.description;
    //     this.tags = this.event.tags;
    //     this.id = this.event.id;
    //     this.interested_count = this.event.interested_count;
    //     console.log("Hello");
    //     })
    // localStorage.setItem("interested_events", JSON.stringify(["2", "3", "4"]));
    // var interested_events = localStorage.getItem("interested_events");
    // if(interested_events.includes(this.id)){
    //   this.self_interested = 1;
    // };

    const send_id = this.id;
    console.log(send_id);
    this.refreshPageService.GetEvent(send_id).subscribe((res) => {
      console.log(this.user.is_admin);
      console.log(res);
      // var today = new Date();
      this.Events = res;
      var eventdate = new Date(this.Events.date)
      // console.log(today)
      // console.log(eventdate)
      // if(eventdate >= today){
      //   this.Events.isPostEvent = false;
      // }
      // else{
      //   this.Events.isPostEvent = true;

      // }
      // this.Events.date = eventdate.toDateString();
      var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let day = eventdate.getDate();
      let month = months[eventdate.getMonth()-1];
      let year = eventdate.getFullYear();
      let format = `${day}  ${month},  ${year}`;
      this.Events.date = format
      console.log(this.Events.date);
      console.log(format);
      console.log(this.Events);
      console.log(this.Events.title);
      console.log(this.Events.isPostEvent);
      console.log(this.Events.tags);
    });

    // this.refreshPageService.getAllEvents().subscribe(res => {
    //   console.log("Hello")

    //   console.log(res);
    //   console.log("Hi")
    // });
    //  console.log("Hello1")
    //     this.events = this.refreshPageService.getAllEvents().subscribe((event)=>{
    //       console.log("Hello2")
    //       this.events = event;
    //       console.log(event)
    //       this.event_string = JSON.stringify(this.events);
    //       console.log(this.events);
    //       if(event != undefined && event != {})
    //           console.log("Nalle");
    //     });
  }
  Follow(id: String){
    console.log("event se nikala")
    this.refreshPageService.addFollowedEvent(this.user._id,id);

  }
  delete(id: String) {
    this.refreshPageService.deleteEvent(id).subscribe((res) => {
      console.log('Deleted');
    });
  }
  follow(){
    console.log(this.user._id,this.Events._id)
    this.refreshPageService.addFollowedEvent(this.user._id,this.Events._id);
  }
  // }
}
