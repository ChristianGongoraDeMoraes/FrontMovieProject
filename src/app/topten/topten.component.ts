import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpService } from '../services/http.service';
import { CardToShowService } from '../services/dts/card-to-show.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-topten',
  imports: [HeaderComponent],
  templateUrl: './topten.component.html',
  styleUrl: './topten.component.scss'
})
export class ToptenComponent implements OnInit{
  ngOnInit(): void {
    this.populingmovies();
    console.log(this.movies)
  }
  movies: any[] = [];

  constructor(private http: HttpService, private dtsShowMovie: CardToShowService, private router: Router) {}

  populingmovies(){
    this.http.getTopTen().subscribe({
      next: (data: any) => {
        for(let m of data){
          this.movies.push(m)
        }
      },
      error: (error: any) => {
        console.log('error');
      }
    });
  }

  indexMovie(name: any){
    for(let i of this.movies){
      if(i.movieViews.name == name){
        return this.movies.indexOf(i) + 1;
      }
    }
    return
  }

   showMovie(name: string){
    for(let movie of this.movies){
      if(movie.movieViews.name == name){
        this.dtsShowMovie.setMovie(movie.movieViews.id, movie.movieViews.name, movie.movieViews.rate, movie.movieViews.description);
        this.router.navigate(['showMovie']);
      }
    }
  }
}
