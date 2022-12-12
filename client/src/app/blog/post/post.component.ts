import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { RefreshPageService } from 'src/app/refresh-page.service';
const data = require('../data.json');

class Blog{
  blogTitle:String;
 blogContent: String;
 date_created:Date;
 image: String ;
 tags: String[];
}

class Section{
 blogs: Blog[];
 label: string;

}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  // data:any=data;
  // id1=1;
  // id2=1;
  // sub;
  // section;
  // blog;
  // title:String;
  // poster:String;
  // date:String;
  // image:String;
  // info:String;
  // tags:String[];
  // id:string;
  // public isEditable = false;
  // public name = 'John Doe';


  // constructor(private _Activatedroute:ActivatedRoute, private _router:Router,private pagerefresher: RefreshPageService)
  //    {
  //    }

  sections: Section[];

  data: any;

  user = null;
  user_string = '';

  Blog: any = [];
  send_id: String;
  event: any;
  image: String;
  title: String;
  description: String;
  date: String;
  tags: [String];
  interested_count: Number;
  self_interested = 0;

  id:string;

  constructor(private _Activatedroute:ActivatedRoute, private _router:Router, private pagerefresher: RefreshPageService,
    @Inject(DOCUMENT) private document: Document,
    private refreshPageService: RefreshPageService,
    private cookieService: CookieService,
    private router: Router,
    private Activatedroute: ActivatedRoute) {
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

      this.refreshPageService.GetBlog(send_id).subscribe((res) => {
        this.Blog = res;
        console.log(this.user.is_admin);

        console.log(res);

      });
      
  
      let gcblogs = [];
      let interiitblogs = [];
      let aavhanblogs = [];
  
      for(let blog of this.Blog){
        if(blog.tags.includes("GC")){gcblogs.push(blog);}
      }
  
      for(let blog of this.Blog){
        if(blog.tags.includes("Inter-IIT")){interiitblogs.push(blog);}
      }
  
      for(let blog of this.Blog){
        if(blog.tags.includes("Aavhan")){aavhanblogs.push(blog);}
      }
  
      var GC:Section={"blogs":gcblogs,"label":"GC"}
      this.sections.push(GC);
      var InterIIT:Section={"blogs":interiitblogs,"label":"Inter-IIT"}
      this.sections.push(InterIIT);
      var Aavhan:Section={"blogs":aavhanblogs,"label":"Aavhan"}
      this.sections.push(Aavhan);
      console.log(Aavhan);
      console.log(InterIIT)
      console.log(GC)
  
}
delete(id: String) {    console.log('Deleted');

  this.refreshPageService.deleteBlog(id).subscribe((res) => {
    console.log('Deleted');
  });
}
}
