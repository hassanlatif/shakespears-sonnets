import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { localStorageSync } from 'ngrx-store-localstorage';


export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['sonnets']})(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer];
