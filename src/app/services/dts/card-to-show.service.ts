import { Injectable } from '@angular/core';

type Movie = {
  name:string,
  rate:string,
  desc:string
}

@Injectable({
  providedIn: 'root'
})
export class CardToShowService {

  constructor() { }

  movie: Movie = { name: '',rate: '', desc: '' };

  setMovie(name:string, rate:string, desc:string){
    this.movie.name = name;
    this.movie.rate = rate;
    this.movie.desc = desc;
  }

  getMovie(){
    return this.movie;
  }
}
