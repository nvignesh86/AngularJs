import { AppState} from './../model/appstate.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const familyReducer=(state={member:'Mother'},action:any):any=>{
    switch(action.type){
        case 'UPDATE_MEMBER':
            return Object.assign({},state,action.payload);
        default:
            return state;
    }
}


export const getFamilyState = createFeatureSelector<any>('family'); 

export const getMember = createSelector(
    getFamilyState, 
    (state: any) => state.member
);