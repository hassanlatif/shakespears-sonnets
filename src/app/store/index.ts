import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Sonnet } from '../models/sonnet';
import { SonnetActionTypes } from './sonnets/sonnet/sonnet.actions';


export interface AppState {
  // sonnets: SonnetsState
}


export const reducers: ActionReducerMap<AppState> = {
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
