import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorListComponent } from './actor-list/actor-list.component';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';


const routes: Routes = [
  { path: 'actores', component: ActorListComponent },
  { path: 'actores/:id', component: ActorDetailComponent },
  { path: '', redirectTo: '/actores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
