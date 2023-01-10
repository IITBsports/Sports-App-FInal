import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserInputService {

  constructor(private http: HttpClient) { }

  addFollowedTags(tags: [string]){
    this.http.post('/api/addfollowedtags', {tags: tags}).pipe(
      map((res: Response)=>{
        return res||{};
      })
    )
  }
  removeFollowedTags(tags: [string]){
    this.http.post('/api/removefollowedtags', {tags: tags}).pipe(
      map((res: Response)=>{
        return res||{};
      })
    )
  }
  addFollowedEvents(tags: [string]){
    this.http.post('/api/addfollowedevents', {tags: tags}).pipe(
      map((res: Response)=>{
        return res||{};
      })
    )
  }
  removeFollowedEvents(tags: [string]){
    this.http.post('/api/removefollowingevents', {tags: tags}).pipe(
      map((res: Response)=>{
        return res||{};
      })
    )
  }
  // backend by danish
  bookSlot(slot_id: string){
    this.http.post('/api/bookslot', {slot_id: slot_id}).pipe(
      map((res:Response)=>{
        return res||{};
      })
    )
  }
  dropSlot(slot_id: string){
    this.http.post('/api/dropslot', {slot_id: slot_id}).pipe(
      map((res:Response)=>{
        return res||{};
      })
    )
  }
  // backend by srishti
  askASecy(message: string, recipients: [string], sender: string){
    this.http.post('/api/askasecy', {sender: sender, message: message, recipients: recipients}).pipe(
      map((res: Response)=>{
        return res||{};
      })
    )
  }
}
