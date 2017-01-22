import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor(){
    
  }

  ngInit(){
    //this.discussions = this.dataAccess.getDiscussions()
  }
}
