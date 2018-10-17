import { Action } from '@ngrx/store';
import { Sonnet } from '../../models/sonnet';
import { Update } from '@ngrx/entity';

export enum SonnetActionTypes {
  ALL_SONNETS_REQUESTED = '[Sonnets List Page] All Sonnets Requested',
  ALL_SONNETS_LOADED = '[Sonnets API] All Sonnets Loaded',
  SAVE_SONNET_REQUESTED = '[Edit Sonnet Form] Save Sonnet Requested',
  SEARCH_SONNETS_REQUESTED = '[Sonnet Search Input] Search for Sonnets Requested'
}

export class AllSonnetsRequested implements Action {
  readonly type = SonnetActionTypes.ALL_SONNETS_REQUESTED;
}

export class AllSonnetsLoaded implements Action {
  readonly type = SonnetActionTypes.ALL_SONNETS_LOADED;
  constructor(public payload: Sonnet[]) {
  }
}

export class SaveSonnetRequested implements Action {
   readonly type = SonnetActionTypes.SAVE_SONNET_REQUESTED;
   constructor(public payload: {sonnet: Update<Sonnet>}) {}
}

export class SearchSonnetsRequested implements Action {
  readonly type = SonnetActionTypes.SEARCH_SONNETS_REQUESTED;
  constructor(public payload: {term: string}) {}
}



export type SonnetActions = AllSonnetsRequested 
| AllSonnetsLoaded  | SaveSonnetRequested | SearchSonnetsRequested;
