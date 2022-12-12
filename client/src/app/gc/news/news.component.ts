import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RefreshPageService } from 'src/app/refresh-page.service';

class News{
  photo: String;
  title: string;
  info: string;
  image: string;
  date: string;
  id: number;
  tags:string[];
}

// class Section{
//   blogs: Blog[];
//   label: string;
//   id: number;
// }
// const data=require('./data.json');


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // sections: Section[]=data;
  news: News[];
  data: any;

  id:string;
  
  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private pagerefresher: RefreshPageService) { }

  ngOnInit() {
    var _=this._Activatedroute.paramMap.subscribe(params=>{
      this.id=params.get('id');
    });
    this.data = this.pagerefresher.getBlogList();
    console.log(this.data);

    this.news=this.data;
  }

}
