import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RefreshPageService} from '../refresh-page.service';

class Blog{
  photo: String;
  title: string;
  info: string;
  poster: string;
  date: string;
  id: number;
  tags:string[];
}

class Section{
  blogs: Blog[];
  label: string;

}
//const data=require('./data.json');


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  sections: Section[];

  blogs: Blog[];
  data: any;
  id:string;

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private pagerefresher: RefreshPageService) { }

  ngOnInit() {
    var _=this._Activatedroute.paramMap.subscribe(params=>{
      this.id=params.get('id');
    });
    this.data =this.pagerefresher.getBlogList();
    console.log(this.data);

    this.blogs=this.data;

    let gcblogs = [];
    let interiitblogs = [];
    let aavhanblogs = [];

    for(let blog of this.blogs){
      if(blog.tags.includes("GC")){gcblogs.push(blog);}
    }

    for(let blog of this.blogs){
      if(blog.tags.includes("Inter-IIT")){interiitblogs.push(blog);}
    }

    for(let blog of this.blogs){
      if(blog.tags.includes("Aavhan")){aavhanblogs.push(blog);}
    }

    var GC:Section={"blogs":gcblogs,"label":"GC"}
    this.sections.push(GC);
    var InterIIT:Section={"blogs":interiitblogs,"label":"Inter-IIT"}
    this.sections.push(InterIIT);
    var Aavhan:Section={"blogs":aavhanblogs,"label":"Aavhan"}
    this.sections.push(Aavhan);


  }

}
