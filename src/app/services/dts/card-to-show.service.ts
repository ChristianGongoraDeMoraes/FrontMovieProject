import { Injectable } from '@angular/core';

type Movie = {
  id: number,
  name:string,
  rate:string,
  desc:string
}

@Injectable({
  providedIn: 'root'
})
export class CardToShowService {

  constructor() { }

  movie: Movie = { id: 0,name: '',rate: '', desc: '' };

  setMovie(id:number ,name:string, rate:string, desc:string){
    this.movie.id = id;
    this.movie.name = name;
    this.movie.rate = rate;
    this.movie.desc = desc;
  }

  getMovie(){
    return this.movie;
  }
}
