import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(public http:HttpClient) { }
  getactors(){
    return this.http.get('http://localhost:3000/actors');
  }
  getactor(id: number) {
    return this.getactors()
      .pipe(
        map((actors: any) => {
          return actors.filter((actor:any) => actor.id === id)[0]
        })
      );
  }
}
