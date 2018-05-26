import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';

@Component({
  selector: 'app-brother',
  templateUrl: './brother.component.html',
  styleUrls: ['./brother.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrotherComponent implements OnInit {

  constructor(private store:Store<AppState>) { }

  ngOnInit() {
  }
  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Brother'}});
  }
}
