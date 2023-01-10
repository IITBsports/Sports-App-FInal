import { Injectable, Query } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { E } from '@angular/cdk/keycodes';
import { identifierName } from '@angular/compiler';
import {QueryData} from './models/Query.js'

@Injectable({
  providedIn: 'root',
})
export class RefreshPageService {
  postId;
  constructor(private httpClient: HttpClient, private http: HttpClient) {}
  REST_API: string = 'http://10.198.49.8:8080';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  getuserdata() {
    let API_URL = this.REST_API + '/api/getuserdata';
    console.log(API_URL);

    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getExplorePage() {}
  getAllEvents() {
    let API_URL = this.REST_API + '/api/getAllEvents';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getAllPeoples() {
    let API_URL = this.REST_API + '/api/getAllPeoples';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }

  getAllBlogs() {
    let API_URL = this.REST_API + '/api/getAllBlogs';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }

  getRunningEventScores() {
    let API_URL = this.REST_API + '/api/getRunningEventScores';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  GetRunningEventScores(id: String): Observable<any> {
    let API_URL = this.REST_API + '/api/GetRunningEventScores/' +id;
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  deleteRunningEventScores(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteRunningEventScores/${id}`;
    console.log(API_URL);

    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  getAvsBScores() {
    let API_URL = this.REST_API + '/api/getAvsBScores';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
      );
    }
    GetAvsBScores(id: String): Observable<any> {
      let API_URL = this.REST_API + '/api/GetAvsBScores/' +id;
      return this.httpClient.get<any>(API_URL).pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    }

    deleteAvsBScores(id: any): Observable<any> {
      let API_URL = `${this.REST_API}/api/deleteAvsBScores/${id}`;
      console.log(API_URL);

      return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
    }

  getCricketScores() {
    let API_URL = this.REST_API + '/api/getCricketScores';

    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  GetCricketScores(id: String): Observable<any> {
    let API_URL = this.REST_API + '/api/GetCricketScores/' +id;
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  deleteCricketScores(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteCricketScores/${id}`;
    console.log(API_URL);

    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }

  getPoints() {
    let API_URL = this.REST_API + '/api/getPoints';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getPts() {
    let API_URL = this.REST_API + '/api/getPts';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getInteriitPts() {
    let API_URL = this.REST_API + '/api/getInteriitPts';
    return this.httpClient.get<any>(API_URL).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  // getEventPage(pageid: string){
  //   let API_URL = `http://localhost:8080/getSingleEvent`;

  //   const params = new HttpParams();
  //   params.set("event-id", pageid);
  //   return this.httpClient.get<any>(API_URL,{params: params}).pipe(
  //     map((res: Response)=>{
  //       return res||{};
  //     })
  //   );
  // }

  updateUser(id: String, data: any) {
    let API_URL = `${this.REST_API}/api/edituserdata/${id}`;
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

  GetEvent(id: String): Observable<any> {
    let API_URL = this.REST_API + '/api/getEvent/' + id;

    console.log(API_URL);
    console.log(id);
    console.log('Hello');

    return this.httpClient
      .get<any>(API_URL, { headers: this.httpHeaders })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    // return this.httpClient.get(`http://localhost:8080/api/getEvent/`+id, { headers: this.httpHeaders })
  }

  deleteEvent(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/api/deleteevent/${id}`;
    console.log(API_URL);

    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      .pipe(catchError(this.handleError));
  }
 deleteBlog(id: any): Observable<any> {
      let API_URL = `${this.REST_API}/api/deleteBlog/${id}`;
      console.log(API_URL);

      return this.httpClient
        .delete(API_URL, { headers: this.httpHeaders })
        .pipe(catchError(this.handleError));
    }

  getFeedPage() {
    const params = new HttpParams();
    params.set('number', '10');
    let events = this.httpClient
      .get<any>('/api/getmanyevents', { params: params })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    let blogs = this.httpClient
      .get<any>('/api/getmanyposts', { params: params })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    let ret = { events: events, blogs: blogs };
    return ret;
  }

  GetBlog(id: String): Observable<any> {
    let API_URL = this.REST_API + '/api/getBlog/' + id;

    console.log(API_URL);
    console.log(id);
    console.log('Hello');

    return this.httpClient
      .get<any>(API_URL, { headers: this.httpHeaders })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    // return this.httpClient.get(`http://localhost:8080/api/getEvent/`+id, { headers: this.httpHeaders })
  }
  getBlogList() {
    const params = new HttpParams();
    params.set('number', '10');
    return this.httpClient
      .get<any>('/api/getmanyposts', { params: params })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  getBlogPage(pageid: string) {
    const params = new HttpParams();
    params.set('post-id', pageid);
    return this.httpClient
      .get<any>('/api/getpostdetailed', { params: params })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }

  getMatchPage() {
    var params = new HttpParams();
    return this.httpClient
      .get('/api/getcertificatepage', { params: params })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }
  getCertificatePage() {
    var params = new HttpParams();
    return this.httpClient
      .get('/api/getcertificatepage', { params: params })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
  }

  getprofilePage() {
    var params = new HttpParams();
    return this.httpClient.get('/api/getprofilepage', { params: params }).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }

  SportPage(sport_name: string) {
    var params = new HttpParams();
    params.set('sport-name', sport_name);
    return this.httpClient.get('/api/getsportpage', { params: params }).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getBookingPage() {
    var params = new HttpParams();
    return this.httpClient.get('/api/getbookingpage', { params: params }).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  getUserData(sessionID: string) {
    var params = new HttpParams();
    let API_URL = `${this.REST_API}/api/getuserdata/${sessionID}`;

    return this.httpClient.get(API_URL, { params: params }).pipe(
      map((res: Response) => {
        console.log('Hi');
        return res || {};
      })
    );
  }
  getBookingPageAdmin() {
    const params = new HttpParams();
    // params.set("event-id", pageid);
    this.httpClient.get<any>('/api/admin/getbookingpage', { params: params });
  }

  getSearchResults(keyword: string) {
    const params = new HttpParams();
    params.set('keyword', keyword);
    return this.httpClient.get('/api/searchbykeyword', { params: params }).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }

  addFollowedEvent(user_id:String,event_id:String){
    var params = new HttpParams();
    console.log("refreshpage me pahuncha");
    let API_URL = `${this.REST_API}/api/addfollowedevent`;
    // params.set('event_id', event_id);
    // params.set('user_id', user_id);
   console.log( {user_id,event_id},API_URL);
   return this.http.post(API_URL, {user_id,event_id}).pipe(
        map((res: Response) => {
        console.log('nikal raha hu bye');

        return res || {};
      })
      // map((res: Response) => {
      //   return null;
      // })
    );
  }


  addQuery(data:QueryData): Observable<any> {
    let API_URL = `${this.REST_API}/api/addQuery`;
    return this.http.post(API_URL, data).pipe(
      map((res: Response) => {
        return res || {};
      })
    );
  }
  GetQuery(id: String): Observable<any> {
    let API_URL = this.REST_API + '/api/getQuery/' + id;

    console.log(API_URL);
    console.log(id);
    console.log('Hello');

    return this.httpClient
      .get<any>(API_URL, { headers: this.httpHeaders })
      .pipe(
        map((res: Response) => {
          return res || {};
        })
      );
    // return this.httpClient.get(`http://localhost:8080/api/getEvent/`+id, { headers: this.httpHeaders })
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
  // }
  // addFollowedEvent(userid,eventid){


  // }
  }}
