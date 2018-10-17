import { Action } from '@ngrx/store';
import { Sonnet } from '../../models/sonnet';
import { Update } from '@ngrx/entity';
import { Search } from '../../models/search';

export enum SearchActionTypes {
  SEARCH_SONNETS_REQUESTED = '[Sonnet Search] Search for Sonnets Requested',
  SEARCH_SONNETS_LOADED = '[Sonnet Search] Search for Sonnets Requested',
  SAVE_SEARCH_REQUESTED = '[Sonnet Search] Save Search Requested'    

}

// export class SearchSonnetsRequested implements Action {
//   readonly type = SearchActionTypes.SEARCH_SONNETS_REQUESTED;
//   constructor(public payload: {term: string}) {}
// }

// export class SearchSonnetsLoaded implements Action {
//     readonly type = SearchActionTypes.SEARCH_SONNETS_LOADED;
//     constructor(public payload: Sonnet[]) {}
// }

export class saveSearchRequested implements Action {
  readonly type = SearchActionTypes.SAVE_SEARCH_REQUESTED;
  constructor(public payload: Search) {}
}

  

export type SearchesActions = saveSearchRequested;
