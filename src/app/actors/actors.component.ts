import { Component } from '@angular/core';
import {ActorsService} from '../actorsservice/actors.service'
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
  actorlist:any;
constructor(public actors:ActorsService ){

}
ngOnInit(){
this.actors.getactors()
.subscribe((data)=>{
this.actorlist = data;
})
}
}
