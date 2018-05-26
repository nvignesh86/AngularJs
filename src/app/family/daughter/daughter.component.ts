import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DaughterComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Daughter'}});
  }
}
