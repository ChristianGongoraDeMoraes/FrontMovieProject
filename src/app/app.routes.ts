import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ToptenComponent } from './topten/topten.component';

export const routes: Routes = [
    //{ path: '', component: HomeComponent },
    { path: '', redirectTo: '/Movies', pathMatch: 'full' },
    { path: 'Movies', component: MoviesComponent },
    { path: 'NewMovie', component: NewMovieComponent },
    { path: 'showMovie', component: ShowMovieComponent },
    { path: 'topten', component: ToptenComponent }
];
