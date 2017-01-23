import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DiscussionsListComponent} from './discussions-list/discussions-list.component';
import {DiscussionDetailsComponent} from './discussion-details/discussion-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: DiscussionsListComponent
    
  },
  {
    path: 'discussion/:id',
    component: DiscussionDetailsComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
