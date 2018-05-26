import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../model/appstate.model';

@Component({
  selector: 'app-mother',
  templateUrl: './mother.component.html',
  styleUrls: ['./mother.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MotherComponent implements OnInit {
  member;
  constructor(private store:Store<AppState>) { }

  ngOnInit() {

    this.member = this.store.select((member)=>{
      console.log("members:::",member);
    });

  }

  changeMember(){
    this.store.dispatch({type:'UPDATE_MEMBER',payload:{member:'Mother'}});
  }

}
