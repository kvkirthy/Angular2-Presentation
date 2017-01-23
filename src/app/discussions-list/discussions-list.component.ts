import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataAccessService} from '../services/data-access.service';

@Component({
  selector: 'app-discussions-list',
  templateUrl: './discussions-list.component.html',
  styleUrls: ['./discussions-list.component.css']
})
export class DiscussionsListComponent implements OnInit {
  discussionList: any;

  constructor(private dataAccess: DataAccessService, private router: Router) { 

  }

  ngOnInit() {
    this.discussionList = this.dataAccess.getDiscussions();
  }


  onSelectingADiscussion(item: any){
       this.router.navigate(['/discussion', item.id]);
  }

}
