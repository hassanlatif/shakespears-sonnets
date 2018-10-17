import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';
import { SonnetActionTypes } from './sonnets/sonnets.actions';


export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
};

export function saveToLocalStorage( reducer ) {
  return function newReducer( state, action ) {
    const nextState = reducer(state, action);

    if( action.type === SonnetActionTypes.ALL_SONNETS_LOADED 
       || SonnetActionTypes.SAVE_SONNET_REQUESTED) {
        localStorage.setItem('state', JSON.stringify(nextState));
    }

    return nextState;
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [saveToLocalStorage] : [saveToLocalStorage];
