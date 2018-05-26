import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';

@Component({
  selector: 'app-spouse',
  templateUrl: './spouse.component.html',
  styleUrls: ['./spouse.component.css']
})
export class SpouseComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Spouse'}});
  }
}
