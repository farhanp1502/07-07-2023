import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { MoviedeatailsComponent } from './moviedeatails/moviedeatails.component';
import { ActorsdeatailsComponent } from './actorsdeatails/actorsdeatails.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    NotfoundcomponentComponent,
    MoviedeatailsComponent,
    ActorsdeatailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
