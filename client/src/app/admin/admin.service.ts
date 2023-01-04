import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { request } from 'http';
import { Observable, throwError } from 'rxjs';
import { Event } from './../../../../server/models/events.js';
import { Blog } from './../../../../server/models/blog.js';
import { People } from './../../../../server/models/people.js';
import { RunningEventScore } from '../../../../server/models/RunningEventScore.js';
import { AvsBScore } from '../../../../server/models/AvsBScore.js';
import { CricketScore } from '../../../../server/models/CricketScore.js';
import { Url } from '../../../../server/models/Url.js';
import { Points } from '../../../../server/models/Points.js';
import {banuser} from '../../../../server/models/banUser.js'

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  // getAllEvents(){
  //   let API_URL = `http://localhost:8080/getAllEvents`;
  //   return this.httpClient.get<any>(API_URL).pipe(
  //     map((res: Response)=>{
  //       return res||{};
  //     })
  //   );
  // }
  postId;

  REST_API: string = 'http://localhost:8080/api';
  REST_API_without_api: string = 'http://localhost:8080';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  addevent(data: Event) {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/addevent`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }

  // addEvent(title:string,description:string,venue:string,date_created:string,author_id:string,date:string,tags: string,images:string){
  //  console.log("Hi")
  //   this.http.post('./../../../API/addevent', {title,description,venue,date_created,author_id,date,event_tags:tags,event_images:images}).pipe(
  //     map((res: Response)=>{
  //       return res||{};
  //     })
  //   );

  // }

  // updateEvent(id: String, data: Event) {
  //   console.log('reached update');
  //   let API_URL = `${this.REST_API_without_api}/editevent`;
  //   console.log(API_URL);
  //   console.log({ id, data });
  //   this.http.post(API_URL, { id, data }).pipe(
  //     map((res: Response) => {
  //       console.log('HIIIII');
  //       return res || {};
  //     })
  //   );
  // }
  updateEvent(id: String, data: any) {
    let API_URL = `${this.REST_API}/editevent/${id}`;
    console.log(API_URL);

    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .subscribe((id) => (this.postId = id));
    // let API_URL = `${this.REST_API}/editevent/${id}`;
    // console.log(API_URL);
    // this.http.put(API_URL, data).pipe(
    //   map((res: Response) => {
    //     return res;
  }
  updateevent(id: any, data: any): Observable<any> {
    let API_URL = `${this.REST_API}/update-event/${id}`;
    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  addBlog( data: Blog ) {
    console.log('Blog adding');
    let API_URL = `${this.REST_API}/addBlog`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }
  addPeople( data: People) {
    console.log(' People adding');
    let API_URL = `${this.REST_API}/addPeople`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }
  updateBlogData(
    id: String,
    tags: [string],
    blog_title: [string],
    blog_desc: [string],
    blog_venue: [string],
    blog_date_begin: [string],
    blog_author: [string],
    blog_url: [string]
  ) {
    this.http
      .post('/api/updateblogdata', {
        id,
        blog_title: String,
        blog_desc: String,
        blog_venue: String,
        blog_date_begin: String,
        blog_author: String,
        blog_url: String,
        blog_tags: tags,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  deleteBlog(id: String) {
    this.http.post('/api/deleteBlog', { id }).pipe(
      map((res: Response) => {
        return null;
      })
    );
  }

  sendpersonalInfo(
    tags: [string],
    person_title: [string],
    person_email: [string],
    person_phone: [string]
  ) {
    this.http
      .post('/api/sendpersonaldata', {
        tags: String,
        person_title: String,
        person_email: String,
        person_phone: String,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  updatepersonalInfo(
    id,
    tags: [string],
    person_title: [string],
    person_email: [string],
    person_phone: [string]
  ) {
    this.http
      .post('/api/updatepersonaldata', {
        id,
        tags: String,
        person_title: String,
        person_email: String,
        person_phone: String,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  deletepersonalInfo(
    id,
    tags: [string],
    person_title: [string],
    person_email: [string],
    person_phone: [string]
  ) {
    this.http.post('/api/deletepersonaldata', { id }).pipe(
      map((res: Response) => {
        return null;
      })
    );
  }

  sendMatchData(
    tags: [string],
    match_team_A: [string],
    match_team_B: [string],
    match_desc: [string],
    match_venue: [string],
    match_date_begin: [string],
    match_url: [string]
  ) {
    this.http
      .post('/api/sendmatchdata', {
        blog_title: String,
        blog_desc: String,
        blog_venue: String,
        blog_date_begin: String,
        blog_author: String,
        blog_url: String,
        blog_tags: tags,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  updateMatchData(
    id: String,
    tags: [string],
    blog_title: [string],
    blog_desc: [string],
    blog_venue: [string],
    blog_date_begin: [string],
    blog_author: [string],
    blog_url: [string]
  ) {
    this.http
      .post('/api/updatematchdata', {
        id,
        blog_title: String,
        blog_desc: String,
        blog_venue: String,
        blog_date_begin: String,
        blog_author: String,
        blog_url: String,
        blog_tags: tags,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  deleteMatchData(
    id: String,
    tags: [string],
    blog_title: [string],
    blog_desc: [string],
    blog_venue: [string],
    blog_date_begin: [string],
    blog_author: [string],
    blog_url: [string]
  ) {
    this.http
      .post('/api/deletematchdata', {
        id,
        blog_title: String,
        blog_desc: String,
        blog_venue: String,
        blog_date_begin: String,
        blog_author: String,
        blog_url: String,
        blog_tags: tags,
      })
      .pipe(
        map((res: Response) => {
          return null;
        })
      );
  }

  sendcertificateInfo() {}

  addRunningEventScore(data: RunningEventScore): Observable<any> {
    console.log('Hi1');
    console.log(data);
    let API_URL = `${this.REST_API}/addRunningEventScore`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }
  updateRunningEventScore(id: String, data: any) {
    let API_URL = `${this.REST_API}/editRunningEventScore/${id}`;
    console.log(API_URL);
    console.log(id)

    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .subscribe((id) => (this.postId = id));
  }

  addAvsBScore(data: AvsBScore): Observable<any> {
    console.log('hi');
    let API_URL = `${this.REST_API}/addAvsBScore`;
    console.log(API_URL);
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }

  updateAvsBScore(id: String, data: any) {
    let API_URL = `${this.REST_API}/editAvsBScore/${id}`;
    console.log(API_URL);
    console.log(id)

    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .subscribe((id) => (this.postId = id));
  }

  addCricketScore(data: CricketScore): Observable<any> {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/addCricketScore`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }

  updateCricketScore(id: String, data: any) {
    let API_URL = `${this.REST_API}/editCricketScore/${id}`;
    console.log(API_URL);
    console.log(id)

    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .subscribe((id) => (this.postId = id));
  }

  addPoints(data: Points): Observable<any> {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/addPoints`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }

  addPts(data: Points): Observable<any> {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/addPts`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }
  addURL(data: Url): Observable<any> {
    let API_URL = `${this.REST_API}/addUrl`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  sendPointsScores(
    tags: [string],
    points_sport: [string],
    points_first: [string],
    points_second: [string],
    points_third: [string],
    points_fourth: [string],
  ) {
    this.http
      .post('/api/sendPointsScores', {
        points_sport: String,
        points_first: String,
        points_second: String,
        points_third: String,
        points_fourth: String,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }

  deletePointsScores(
    tags: [string],
    points_sport: [string],
    points_first: [string],
    points_second: [string],
    points_third: [string],
    points_fourth: [string],
  ) {
    this.http
      .post('/api/sendPointsScores', {
        points_sport: String,
        points_first: String,
        points_second: String,
        points_third: String,
        points_fourth: String,
      })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  addInteriitPts(data: Points): Observable<any> {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/addInteriitPts`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }
  updateQuery(data: Points): Observable<any> {
    console.log('Hi1');
    let API_URL = `${this.REST_API}/updateQuery`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        console.log('Hi12');

        return res || {};
      })
    );
  }

  updatequery(id: String, data: any) {
    let API_URL = `${this.REST_API}/editquery/${id}`;
    console.log(API_URL);

    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .subscribe((id) => (this.postId = id));
    // let API_URL = `${this.REST_API}/editevent/${id}`;
    // console.log(API_URL);
    // this.http.put(API_URL, data).pipe(
    //   map((res: Response) => {
    //     return res;
  }
  deleteQuery(id){
    let API_URL = `${this.REST_API}/deleteQuery/${id}`;
    console.log(API_URL);

    return this.http
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  getAllQueries() {
    let API_URL = this.REST_API + '/getAllQueries';
    return this.http.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }

  addBanUser(data:banuser): Observable<any> {
    let API_URL = `${this.REST_API}/addBanUser`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getBanUser() {
    let API_URL = this.REST_API + '/getBanUser';
    return this.http.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  updateBanUser(id: String, data: any) {
    let API_URL = `${this.REST_API}/editbanuser/${id}`;
    console.log(API_URL);

    return this.http
      .put(API_URL, data, { headers: this.httpHeaders })
      .subscribe((id) => (this.postId = id));
    // let API_URL = `${this.REST_API}/editevent/${id}`;
    // console.log(API_URL);
    // this.http.put(API_URL, data).pipe(
    //   map((res: Response) => {
    //     return res;
  }

}




