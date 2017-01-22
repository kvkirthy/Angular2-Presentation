import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {DiscussionsListComponent} from './discussions-list/discussions-list.component';
import {DataAccessService} from './data-access.service';

const routes: Routes = [
  {
    path: 'home',
    component: DiscussionsListComponent,
    children: []
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
  providers: [DataAccessService]
})
export class AppRoutingModule { }
