import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../moviesservice/movies.service'
@Component({
  selector: 'app-moviedeatails',
  templateUrl: './moviedeatails.component.html',
  styleUrls: ['./moviedeatails.component.css']
})
export class MoviedeatailsComponent {
movie:any;
constructor(public route:ActivatedRoute ,public movieser: MoviesService){

}
ngOnInit(){

  this.route.paramMap
  .subscribe((params:any)=>{
    this.movieser.getmovie(+params.get('id')).subscribe((flop)=>{
this.movie = flop;

    })
  })
}
}
