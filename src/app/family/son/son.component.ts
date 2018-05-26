import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Son'}});
  }

}
