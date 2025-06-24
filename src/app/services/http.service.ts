import { HttpClient, HttpParams } from '@angular/common/http';
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
  getTopTen(): Observable<any>{
    let _url: string = (this.url + `api/views/topten`)
    return this.http.get(_url);
  }
  postViews(movieId: any): Observable<any>{
    let _url: string = (this.url + `api/views`)
    const body = {
      movieId : movieId
    }
    return this.http.post(_url, body);
  }


  postNewComment(id: number, newComment: string){
    let _url:string = (this.url + `comments/newComment`)
    let obj:newCommentRequest = { body: newComment, movieId: id }
    return this.http.post(_url, obj);
  }


  getAllMovies(currentPage: number): Observable<any>{
      let _url: string = (this.url + "Api/Movie");
      currentPage = currentPage - 1;
      let params = new HttpParams()
    .set('pageNo', currentPage);
      return this.http.get(_url, {params});
  }


  getMovieByNameLike(name: string, currentPage: number): Observable<any>{
    let _url: string = (this.url + `Api/Movie/searchLike/${name}`);
    currentPage = currentPage - 1;
    let params = new HttpParams()
    .set('pageNo', currentPage);
    return this.http.get(_url, {params});
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
