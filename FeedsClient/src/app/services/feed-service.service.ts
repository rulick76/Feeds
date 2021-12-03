import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Feed } from '../models/feed';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedsService  {

  private feedsUrl = `${environment.apiUrl}/feeds`;
  private feed:Feed=new Feed();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient)
  {

  }


  private messageSource = new BehaviorSubject('Feeds');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  // tslint:disable-next-line: typedef
   getFeeds() {
    return this.http.get(`${this.feedsUrl}`, this.httpOptions);
  }

  postFeed(textFeed:string) {
    this.feed.name="Seemo"; //One user App at the moment :)
    this.feed.feed=textFeed;
    return this.http.post<any>(this.feedsUrl, this.feed).subscribe(data => {
      //this.postId = data.id;
  })
}

}


