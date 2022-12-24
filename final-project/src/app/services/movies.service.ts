import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies() {
    return this.http.get('http://localhost:4200/assets/data/trending-movies.json');
  }

}
