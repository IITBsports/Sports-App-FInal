import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
const data=require('../data.json');
@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  data:any=data;
  id1=1;
  id2=1;
  sub;
  news;
  title:String;
  image:String;
  date:String;
  info:String;
  tags:String[];
  id:string;

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router)
     {     
     }    
    ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params=>{
      console.log(params);
      this.id1=Number(params.get('id1'));
      this.id2=Number(params.get('id2'));
      this.news=data[+this.id1-1].blogs[+this.id2-1];

    });
    this.title=this.news.title;
    this.image=this.news.image;
    this.date=this.news.date;
    this.info=this.news.info;
    this.tags=this.news.tags;

}


}
