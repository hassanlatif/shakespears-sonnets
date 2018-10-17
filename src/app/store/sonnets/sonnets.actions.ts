import { Action } from '@ngrx/store';
import { Sonnet } from '../../models/sonnet';
import { Update } from '@ngrx/entity';

export enum SonnetActionTypes {
  ALL_SONNETS_REQUESTED = '[Sonnets List Page] All Sonnets Requested',
  ALL_SONNETS_LOADED = '[Sonnets API] All Sonnets Loaded',
  SONNET_REQUESTED  = '[Sonnet Page] Sonnet Requested',
  SONNETS_REQUESTED = '[Sonnet Page] Sonnets Requested',
  SONNET_SAVED = '[Edit Sonnet Form] Sonnet Saved',
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

export class SonnetSaved implements Action {
   readonly type = SonnetActionTypes.SONNET_SAVED;
   constructor(public payload: {sonnet: Update<Sonnet>}) {}
}

export class SearchSonnetsRequested implements Action {
  readonly type = SonnetActionTypes.SEARCH_SONNETS_REQUESTED;
  constructor(public payload: {term: string}) {}
}

export class SonnetRequested implements Action {
  readonly type = SonnetActionTypes.SONNET_REQUESTED;
   constructor(public payload: {number:number}) {}
}

export class SonnetsRequested implements Action {
  readonly type = SonnetActionTypes.SONNETS_REQUESTED;
   constructor(public payload: {numbers:number[]}) {}
}


export type SonnetActions = AllSonnetsRequested 
| AllSonnetsLoaded | SonnetRequested 
| SonnetsRequested | SonnetSaved;
