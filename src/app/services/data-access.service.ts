import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class DataAccessService {

  constructor(private http: Http) { }

  getDiscussions(): Observable<any>{

   return this.http.get("http://localhost:3000/db")
      .map((r:Response) => r.json().data);
      
  }

}
