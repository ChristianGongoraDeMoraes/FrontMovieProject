import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CardToShowService } from '../services/dts/card-to-show.service';

type Movie = {
  name: string,
  rate: string,
  desc: string
}

@Component({
  selector: 'app-show-movie',
  imports: [HeaderComponent],
  templateUrl: './show-movie.component.html',
  styleUrl: './show-movie.component.scss'
})
export class ShowMovieComponent implements OnInit{
  dtsShowMovie = inject(CardToShowService);
  
  movie: Movie = {name: '', rate: '', desc: ''};
  
  ngOnInit(): void {
    this.movie = this.dtsShowMovie.getMovie();
  }
}
