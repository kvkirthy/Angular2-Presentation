import { Component, OnInit } from '@angular/core';
import {DataAccessService} from '../data-access.service';

@Component({
  selector: 'app-discussions-list',
  templateUrl: './discussions-list.component.html',
  styleUrls: ['./discussions-list.component.css']
})
export class DiscussionsListComponent implements OnInit {
  discussionList: any;

  constructor(private dataAccess: DataAccessService) { 

  }

  ngOnInit() {
    this.discussionList = this.dataAccess.getDiscussions();
  }

}
