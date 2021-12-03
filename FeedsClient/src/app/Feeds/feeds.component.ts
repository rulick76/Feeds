
import { Component, OnInit, ViewChild } from '@angular/core';
import { FeedsService } from '../services/feed-service.service';
import { Feed } from '../models/feed' ;

@Component({
  selector: '',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})

export class FeedsComponent implements OnInit  {
  feedsList: Feed[];
  feedText='';
  ngAfterViewInit() {

  }
  constructor(private feedsService: FeedsService)
  { }

  ngOnInit() {
    this.getfeeds();
  }

  getfeeds() {
        this.feedsService.getFeeds().subscribe((data: {}) => {
          this.feedsList = data as Feed[] ;
        });
  }

  postfeed(feedtext:string) {
        this.feedsService.postFeed(feedtext);
        this.getfeeds();
  }

}



