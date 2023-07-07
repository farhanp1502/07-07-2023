import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public http: HttpClient) { }
  getmovies() {
    return this.http.get('http://localhost:3000/movies');
  }
  
  getmovie(id: number) {
    return this.getmovies()
      .pipe(
        map((movies: any) => {
          return movies.filter((movie:any) => movie.id === id)[0]
        })
      );
  }
  
 
    
  
}



