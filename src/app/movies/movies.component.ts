import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpService } from '../services/http.service';

type Movie = {
  id: Number,
  name: String,
  rate: String,
  description: String
}

@Component({
  selector: 'app-movies',
  imports: [HeaderComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  movies: Array<Movie> = [];
  
  http = inject(HttpService);


  ngOnInit(): void {
      this.getMovies();
  }



  getMovies(){
    this.http.getAllMovies().subscribe({
      next: (data: any) => {
        for(let movie of data){
          this.movies.push(movie)
        }
      },
      error: (error: any) => {
        console.error('Erro');
      }
    });
  }
}
