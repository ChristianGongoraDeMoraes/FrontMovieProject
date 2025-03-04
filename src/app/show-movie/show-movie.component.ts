import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { CardToShowService } from '../services/dts/card-to-show.service';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';

type Movie = {
  id: number,
  name: string,
  rate: string,
  desc: string
}
type Comment = {
  id: number,
  body: string
}

@Component({
  selector: 'app-show-movie',
  imports: [HeaderComponent, FormsModule],
  templateUrl: './show-movie.component.html',
  styleUrl: './show-movie.component.scss'
})
export class ShowMovieComponent implements OnInit{
  dtsShowMovie = inject(CardToShowService);
  http = inject(HttpService);


  comments: Comment[] = []
  newComment: string = '';

  movie: Movie = {id: 0, name: '', rate: '', desc: ''};
  
  ngOnInit(): void {
    this.movie = this.dtsShowMovie.getMovie();

    this.getAllComments();
  }

  addNewComment(){
    this.http.postNewComment(this.movie.id, this.newComment).subscribe({
      next: (data: any) => {
          console.log('data');
          this.resetInput();
      },
      error: (error: any) => {
        console.log('error add comment') 
        this.resetInput();
      }
    });
  }

  getAllComments(){
    this.http.getAllComments(this.movie.id).subscribe({
      next: (data: any) => {
        for(let item of data){
          this.comments.push(item);
        }
      },
      error: (error: any) => {
        console.log('error get comments')
      }
    });
  }

  resetInput(){
    this.newComment = '';
    this.comments = [];
    this.getAllComments();
  }
}
