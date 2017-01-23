import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

import {DataAccessService} from '../services/data-access.service';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-discussion-details',
  templateUrl: './discussion-details.component.html',
  styleUrls: ['./discussion-details.component.css']
})
export class DiscussionDetailsComponent implements OnInit {

  discussion: any = {};
  constructor(private router: Router,
  private route: ActivatedRoute,
  private dataAccess: DataAccessService) { }

  ngOnInit() {    
    this.route.params
    .switchMap((params:Params) => params['id'])
    .subscribe(
      (data)=> {
        this.dataAccess.geDiscussion(`${data}`)
          .subscribe(
            (data) => { 
              this.discussion = data;
              console.log(`-> ${this.discussion}`);
            },
            (error) => console.error(error),
            () => console.info("response ended from discussion service")
          );
       
      },
      (error) => console.error(error),
      () => console.info("done")
    );
   // this.selectedId = JSON.stringify(this.route.params);
  }


}
