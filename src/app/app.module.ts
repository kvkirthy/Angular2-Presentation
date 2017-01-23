import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {DataAccessService} from './services/data-access.service';

import { AppComponent } from './app.component';
import { DiscussionsListComponent } from './discussions-list/discussions-list.component';
import { DiscussionDetailsComponent } from './discussion-details/discussion-details.component';
import { HighlighterDirective } from './directives/highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiscussionsListComponent,
    DiscussionDetailsComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataAccessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
