import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type reqNewMovie = {
  name: String,
  rate: String,
  description: String
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)
  url = "http://localhost:8080/"

  constructor() { }

  getAllMovies(): Observable<any>{
      let _url: string = (this.url + "Api/Movie")
      return this.http.get(_url);
  }

  postNewMovie(movie: reqNewMovie): Observable<any>{
    let _url: string = (this.url + "Api/Movie")
    return this.http.post(_url, movie);
  }

  postPhotoMovie(image: any, movieName: string): Observable<any>{
    let _url: string = (this.url + "image/upload/image")
    let formatMovieName: string = `{"name" : "${movieName}"}`;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('movie', formatMovieName);
    //console.log(formData);

    return this.http.post(_url, formData);
  }
}
