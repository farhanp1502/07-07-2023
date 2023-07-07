import { Component } from '@angular/core';
import { MoviesService } from '../moviesservice/movies.service'
// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies:any;
constructor(public movie:MoviesService){

}
ngOnInit(){
  this.movie.getmovies()
  .subscribe((data)=>{
this.movies = data;

  })
  
}
}
