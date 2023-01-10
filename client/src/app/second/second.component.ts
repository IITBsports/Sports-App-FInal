import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefreshPageService } from '../refresh-page.service';
import { SlideInOutAnimation } from './animations'
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
  id:string;

}
export interface Events {
  tags:String;
  title:  String;
  description:  String;
  venue:  String ;
  date_created: Date;
  sport:  string;
  date:  String;
  images: String;

}



export interface Hightlight {
  title: String;
  image: String;
  date: String;
  alt: String;
  content: String;
}


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  animations: [SlideInOutAnimation]
})
export class SecondComponent implements OnInit {
  Events:any = [];
  Show_events=[];
  Hide_events=[];
  new_array:any=[];
  animation_state1 = "out";
  animation_state2 = "out";
  Blogs:any;

  highlights: Hightlight[] = [
    { title: "Mixed Cricket League", image: "https://material.angular.io/assets/img/examples/shiba2.jpg", date: "01/01/2000", alt: "shiba inu", content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan" },
    { title: "Aavhan Trek", image: "https://material.angular.io/assets/img/examples/shiba2.jpg", date: "01/01/2000", alt: "shiba inu", content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan" },
    { title: "Aavhan Freedom Run", image: "https://material.angular.io/assets/img/examples/shiba2.jpg", date: "01/01/2000", alt: "shiba inu", content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan" },
    { title: "All IITs Chess League", image: "https://material.angular.io/assets/img/examples/shiba2.jpg", date: "01/01/2000", alt: "shiba inu", content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan" },
    { title: "Chess 3.0", image: "https://material.angular.io/assets/img/examples/shiba2.jpg", date: "01/01/2000", alt: "shiba inu", content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan" },
  ]

  shown_sports_tiles: Tile[] = [
    { text: 'Aquatics', url: 'Aquatics',  cols: 2, rows: 1, color: '../../assets/sport-png/aquatics.png',id:'', },
    { text: 'Athletics', url: 'Athletics', cols: 2, rows: 1, color: '../../assets/sport-png/athletics.png',id:'' },
    { text: 'Badminton',url: 'Badminton', cols: 2, rows: 1, color: '../../assets/sport-png/badminton.png',id:'' },
    { text: 'Basketball',url: 'Basketball', cols: 2, rows: 1, color: "../../assets/sport-png/basketball.png",id:''},
    { text: 'Board Games', url: 'board_games', cols: 2, rows: 1, color: "../../assets/sport-png/boardgames.png",id:'' },
    { text: 'Cricket', url: 'Cricket', cols: 2, rows: 1, color: '../../assets/sport-png/cricket.png',id:'' },
    { text: 'Football',url: 'Football', cols: 2, rows: 1, color: "../../assets/sport-png/football.png",id:'' },
    { text: 'Hockey',url: 'Hockey', cols: 2, rows: 1, color: "../../assets/sport-png/hockey.png",id:'' },
    { text: 'Indian Games', url: 'indian_games', cols: 2, rows: 1, color: '../../assets/sport-png/indiangames.png',id:'' },
    { text: 'Lawn Tennis', url: 'lawn_tennis', cols: 2, rows: 1, color: "../../assets/sport-png/lawntennis.png",id:'' },
    { text: 'Squash', url: 'Squash', cols: 2, rows: 1, color: "../../assets/sport-png/icons8-squash-racquet-100.png",id:'' },
    { text: 'Table Tennis', url: 'table_tennis', cols: 2, rows: 1, color: "../../assets/sport-png/tabletennis.png",id:''},
    { text: 'Volleyball', url: 'Volleyball', cols: 2, rows: 1, color: "../../assets/sport-png/volleyball.png",id:'' },
    { text: 'Weightlifting', url: 'Weightlifting', cols: 2, rows: 1, color: "../../assets/sport-png/weightlifting.png",id:''},
    { text: 'Ultimate', url: 'Ultimate', cols: 2, rows: 1, color: "../../assets/sport-png/ultimate.png",id:''},
    { text: 'Dark Knight Chess Club', url: 'Dkcc', cols: 2, rows: 1, color: "../../assets/sport-png/dkcc.png",id:''},
    { text: 'Aavhan', url: 'aavhan', cols: 2, rows: 1, color: "../../assets/sport-png/aavhan.png",id:''},
    { text: 'Rubix Club', url: 'rubix', cols: 2, rows: 1, color: "../../assets/sport-png/rubix.png",id:''},
    { text: 'Adventure Sports', url: 'Adventure', cols: 2, rows: 1, color: "../../assets/sport-png/adventure.png",id:''},
    { text: 'Yoga', url: 'yoga', cols: 2, rows: 1, color: "../../assets/sport-png/yoga.png",id:''},

  ];
  // gc_tiles: Tile[] = [
  //   { text: 'standings', cols: 2, rows: 1, color: '../../assets/standings.jpeg',id:'' },
  //   { text: 'news', cols: 2, rows: 1, color: '../../assets/news.jpeg',id:'' },
  //   { text: 'score', cols: 2, rows: 1, color: '../../assets/score.jpeg',id:'' },
  //   { text: 'legacy', cols: 2, rows: 1, color: '../../assets/legacy.jpeg',id:'' },
  // ];

  // interiit_tiles: Tile[] = [
  //   { text: 'standings', cols: 2, rows: 1, color: '../../assets/standings.jpeg',id:'' },
  //   { text: 'news', cols: 2, rows: 1, color: '../../assets/news.jpeg',id:'' },
  //   { text: 'score', cols: 2, rows: 1, color: '../../assets/score.jpeg',id:'' },
  //   { text: 'legacy', cols: 2, rows: 1, color: '../../assets/legacy.jpeg',id:'' },
  // ];

  constructor(private router: Router,@Inject(DOCUMENT) private document: Document,private refreshPageService: RefreshPageService, private Activatedroute: ActivatedRoute) { }



  ngOnInit() {
    this.refreshPageService.getAllBlogs().subscribe(res => {
      this.Blogs =res;


    });
    this.refreshPageService.getAllEvents().subscribe(res => {
      console.log(res)
      this.new_array=res;
      this.Events =res;

      console.log(this.Events)
      console.log(this.Events.title);
      console.log(this.Events.tags);
    });


  }
  redirect_to_gc(tab) {
    let params = new HttpParams().set('tab', tab);
    this.router.navigate(['gc', params]);
  }
  get sortByLastModifiedAsend() {
    if (this.Blogs !== undefined) {
    return this.Blogs.sort((a: any, b: any) => {
      return <any>new Date(b.date_created) - <any>new Date(a.date_created);
    });}
    else{
      return 0;
    }
  }
}
