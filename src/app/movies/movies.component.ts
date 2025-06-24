import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';
import { CardToShowService } from '../services/dts/card-to-show.service';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

type Movie = {
  id: number,
  name: string,
  rate: string,
  description: string
}

@Component({
  selector: 'app-movies',
  imports: [//HeaderComponent,
     FormsModule, MatIconModule, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  movies: Array<Movie> = [];
  currentPage: number = 1;
  
  query: string = "";

  http = inject(HttpService);
  dtsShowMovie = inject(CardToShowService);
  router = inject(Router);


  ngOnInit(): void {
      this.getMovies();
  }

  nextPage(){
    this.currentPage = this.currentPage + 1;

    if(this.query != ""){
      this.searchQuery();
    }else{
      this.getMovies();
    }
  }
  prevPage(){
    if(this.currentPage == 1) return;

    this.currentPage = this.currentPage - 1;

    if(this.query != ""){
      this.searchQuery();
    }else{
      this.getMovies();
    }
  }

  showMovie(name: string){
    for(let movie of this.movies){
      if(movie.name == name){
        this.dtsShowMovie.setMovie(movie.id, movie.name, movie.rate, movie.description);
        this.router.navigate(['showMovie']);
      }
    }
  }
  searchQuery(){
    if(this.query === ''){
      this.movies = [];
      return this.getMovies();
    }

    this.http.getMovieByNameLike(this.query, this.currentPage).subscribe({
      next: (data: any) =>{
        this.movies = [];
        for(let movie of data){
          this.movies.push(movie)
        }
        //this.query = '';
      },
      error: (error: any) =>{
        console.log('Erro');
      }
    })
  }
  searchQuery2(){
    if(this.query === ''){
      this.movies = [];
      return this.getMovies();
    }
    
    this.currentPage = 1;


    this.http.getMovieByNameLike(this.query, this.currentPage).subscribe({
      next: (data: any) =>{
        this.movies = [];
        for(let movie of data){
          this.movies.push(movie)
        }
        //this.query = '';
      },
      error: (error: any) =>{
        console.log('Erro');
      }
    })
  }


  getMovies(){
    this.movies = [];
    this.http.getAllMovies(this.currentPage).subscribe({
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
