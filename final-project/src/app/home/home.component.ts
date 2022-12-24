import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: any;
  pageSize:number=4;
  constructor(private router: Router,private service:MoviesService) {

  }

  ngOnInit(): void {
    this.getMovies();
  }


  getMovies() {
    this.service.getMovies()
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]);
  }

}
