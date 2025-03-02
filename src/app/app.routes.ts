import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Movies', component: MoviesComponent },
    { path: 'NewMovie', component: NewMovieComponent }
];
