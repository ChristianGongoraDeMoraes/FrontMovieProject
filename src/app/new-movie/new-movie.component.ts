import { Component, inject } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/header/header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-movie',
  imports: [FormsModule, HeaderComponent],
  templateUrl: './new-movie.component.html',
  styleUrl: './new-movie.component.scss'
})
export class NewMovieComponent {
  http = inject(HttpService);
  router = inject(Router);
  selectedImage:any;

  name:string = '';
  rate:string = '';
  description:string = '';


  sendForm(){
    this.http.postNewMovie({ name: this.name,rate: this.rate, description: this.description }).subscribe({
      next: (data: any) => {
        this.sendPicture();
      },
      error: (error: any) => {
        console.log('error newMovie')
      }
    });
  }


  sendPicture(){
    this.http.postPhotoMovie(this.selectedImage, this.name).subscribe({
      next: (data: any) => {
        this.router.navigate(['Movies'])
      },
      error: (error: any) => {
        console.log('error imageNewMovie')
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }
}
