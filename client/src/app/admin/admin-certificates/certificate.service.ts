import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  URL: string = "http://localhost:3000/api/post/addcertificates";
  constructor(private http:HttpClient) { }

  addCertificate(data:string):Observable<any>{

    const headers = { 'content-type': 'application/json'}  
    const body=data;
    console.log(body)
    return this.http.post(this.URL , body,{'headers':headers})
  }
}
