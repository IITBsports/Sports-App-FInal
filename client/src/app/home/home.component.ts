import {  HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RefreshPageService } from '../refresh-page.service';

import Swiper from 'swiper'
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  id:string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Events:any;
Points:any;
Blogs:any;
event_blog=[];
headers = ["Event", "Gold", "Silver", "Bronze"];
httpOptions
  auth_code
  tokens
  shown_sports_tiles: Tile[] = [
    { text: 'Aquatics', cols: 2, rows: 1, color: '../../assets/sport-png/aquatics.png',id:'' },
    { text: 'Athletics', cols: 2, rows: 1, color: '../../assets/sport-png/athletics.png',id:'' },
    { text: 'Badminton', cols: 2, rows: 1, color: '../../assets/sport-png/badminton.png',id:'' },
    { text: 'Basketball', cols: 2, rows: 1, color: "../../assets/sport-png/basketball.png",id:''},
    { text: 'Board_Games', cols: 2, rows: 1, color: "../../assets/sport-png/chess.png",id:'' },
    { text: 'Cricket', cols: 2, rows: 1, color: '../../assets/sport-png/cricket.png',id:'' },
    { text: 'Football', cols: 2, rows: 1, color: "../../assets/sport-png/football.png",id:'' },
    { text: 'Hockey', cols: 2, rows: 1, color: "../../assets/sport-png/hockey.png",id:'' },
    { text: 'Indian_Games', cols: 2, rows: 1, color: '../../assets/sport-png/indiangames.png',id:'' },
    { text: 'Lawn_Tennis', cols: 2, rows: 1, color: "../../assets/sport-png/lawntennis.png",id:'' },
    { text: 'Squash', cols: 2, rows: 1, color: "../../assets/sport-png/icons8-squash-racquet-100.png",id:'' },
    { text: 'Table_Tennis', cols: 2, rows: 1, color: "../../assets/sport-png/tabletennis.png",id:''},
    { text: 'Volleyball', cols: 2, rows: 1, color: "../../assets/sport-png/volleyball.png",id:'' },
    { text: 'Weightlifting', cols: 2, rows: 1, color: "../../assets/sport-png/weightlifting.png",id:''},

  ];

  gc_tiles: Tile[] = [
    { text: 'Standings', cols: 2, rows: 1, color: '../../assets/standings.jpeg',id:'' },
    { text: 'News', cols: 2, rows: 1, color: '../../assets/news.jpeg',id:'' },
    { text: 'Score', cols: 2, rows: 1, color: '../../assets/score.jpeg',id:'' },
    { text: 'Legacy', cols: 2, rows: 1, color: '../../assets/legacy.jpeg',id:'' },
  ];

  interiit_tiles: Tile[] = [
    { text: 'Standings', cols: 2, rows: 1, color: '../../assets/standings.jpeg',id:'' },
    { text: 'News', cols: 2, rows: 1, color: '../../assets/news.jpeg',id:'' },
    { text: 'Score', cols: 2, rows: 1, color: '../../assets/score.jpeg',id:'' },
    { text: 'Legacy', cols: 2, rows: 1, color: '../../assets/legacy.jpeg',id:'' },
  ];
  constructor( private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,@Inject(DOCUMENT) private document: Document,private refreshPageService: RefreshPageService, private Activatedroute: ActivatedRoute) {


    this.httpOptions = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'Host': 'gymkhana.iitb.ac.in', 'Authorization' : 'Basic eyI1ejhva2M4U2tJZEdiRkRwNmRlaFlPMEtaZFVMT3BYeElQbGw1RGpHIjoidzJNZmlOVThma3JmYTZNcFV1UVJWVUhBa25qUDFWM2tqc2RUd2JMUEhGbEY5VkNFOTdQVkpSYThxeEdKY3hkU2hRSU4xR01kbGRvN0lCUjl3ZnRmQUU0Z3BSVkhHNzF1bjFpVHV6Z2w3RjE4blBUMUd3UVNPdEtrYjR0RWF1czEifQ=='});
  }

  ngOnInit() {
    this.refreshPageService.getAllEvents().subscribe(res => {
      this.Events =res;
       for(let i=0;i<this.Events.length;i++){
        this.Events[i].description=(this.Events[i].description.substring(0, 30))+" ....."
       }

    });
    this.refreshPageService.getPoints().subscribe((res) => {
      // console.log(res);
      this.Points = res;

      console.log(this.Points);
      // console.log(this.Points[0]);
    });
    this.refreshPageService.getAllBlogs().subscribe(res => {
      this.Blogs =res;
      console.log(this.Blogs.length+this.Events.length)
      // for(let i=this.Events.length;i<this.Blogs.length+this.Events.length;i++){
      //   let j=i-this.Events.length;
      //   this.event_blog[i]=(this.Blogs[j])
      //   console.log(this.event_blog)

      //  }

    });
  
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1.5,
      initialSlide: 5,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    console.log("Maa")
    console.log(this.Events)

    
  }


  get sortByLastModifiedAsend() {
    if (this.Events !== undefined) {
    return this.Events.sort((a: any, b: any) => {
      return <any>new Date(b.date_created) - <any>new Date(a.date_created);
    });}
    else{return 0;}
  }

}
