import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorsService } from '../actorsservice/actors.service';
@Component({
  selector: 'app-actorsdeatails',
  templateUrl: './actorsdeatails.component.html',
  styleUrls: ['./actorsdeatails.component.css']
})
export class ActorsdeatailsComponent {
  actor:any;
  
  constructor(public route:ActivatedRoute ,public actorser: ActorsService ){
   
  
  }
  ngOnInit(){
  
    this.route.paramMap
    .subscribe((params:any)=>{
      this.actorser.getactor(+params.get('id')).subscribe((flop1)=>{
  this.actor = flop1;
  
  
      })
    })
  }
}
