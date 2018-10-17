import { Action } from '@ngrx/store';
import { Search } from '../../models/search';

export enum SearchActionTypes {
  SAVE_SEARCH_REQUESTED = '[Sonnet Search Input] Save Search Requested'    
}

export class saveSearchRequested implements Action {
  readonly type = SearchActionTypes.SAVE_SEARCH_REQUESTED;
  constructor(public payload: Search) {}
}


export type SearchesActions = saveSearchRequested;
