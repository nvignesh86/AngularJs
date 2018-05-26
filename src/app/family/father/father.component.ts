import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store'
import { AppState } from '../model/appstate.model';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FatherComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }

  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Father'}});
  }

}
