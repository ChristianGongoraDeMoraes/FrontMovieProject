import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type reqNewMovie = {
  name: String,
  rate: String,
  description: String
}

type newCommentRequest = {
  body: String,
  movieId: Number
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  http = inject(HttpClient)
  url = "http://localhost:8080/"

  constructor() { }

  getAllComments(id: number): Observable<any>{
    let _url: string = (this.url + `comments/${id}`)
    return this.http.get(_url);
  }

  postNewComment(id: number, newComment: string){
    let _url:string = (this.url + `comments/newComment`)
    let obj:newCommentRequest = { body: newComment, movieId: id }
    return this.http.post(_url, obj);
  }


  getAllMovies(): Observable<any>{
      let _url: string = (this.url + "Api/Movie")
      return this.http.get(_url);
  }


  getMovieByNameLike(name: string): Observable<any>{
    let _url: string = (this.url + `Api/Movie/searchLike/${name}`);
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
