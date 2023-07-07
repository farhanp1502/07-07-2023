import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component'
import { ActorsComponent } from './actors/actors.component'
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component'
import { HttpClientModule } from '@angular/common/http';
import { MoviedeatailsComponent } from './moviedeatails/moviedeatails.component';
import { ActorsdeatailsComponent } from './actorsdeatails/actorsdeatails.component';
const routes: Routes = [
  {path: '', redirectTo:'movies',pathMatch:'full'},
  {path: 'movies' , component: MoviesComponent},
  {path: 'actors' , component: ActorsComponent},
  {path: 'actors/:id', component: ActorsdeatailsComponent}, 
  {path: 'movies/:id', component: MoviedeatailsComponent}, 
  // {path: 'movies/**' , component: NotfoundcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
