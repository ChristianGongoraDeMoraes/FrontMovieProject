import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
