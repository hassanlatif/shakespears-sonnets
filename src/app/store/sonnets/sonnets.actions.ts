import { Action } from '@ngrx/store';
import { Sonnet } from '../../models/sonnet';
import { Update } from '@ngrx/entity';

export enum SonnetActionTypes {
  AllSonnetsRequested = '[Sonnets List Page] All Sonnets Requested',
  AllSonnetsLoaded = '[Sonnets API] All Sonnets Loaded',
  SonnetRequested = '[Sonnet Page] Sonnet Requested',
  SonnetsRequested = '[Sonnet Page] Sonnets Requested',
  SonnetSaved = '[Edit Sonnet Form] Sonnet Saved',
  SearchSonnetsRequested = '[Sonnet Search Input] Search for Sonnets Requested'

}

export class AllSonnetsRequested implements Action {
  readonly type = SonnetActionTypes.AllSonnetsRequested;
}

export class AllSonnetsLoaded implements Action {
  readonly type = SonnetActionTypes.AllSonnetsLoaded;
  constructor(public payload: Sonnet[]) {
  }
}

export class SonnetSaved implements Action {
   readonly type = SonnetActionTypes.SonnetSaved;
   constructor(public payload: {sonnet: Update<Sonnet>}) {}
}

export class SearchSonnetsRequested implements Action {
  readonly type = SonnetActionTypes.SearchSonnetsRequested;
  constructor(public payload: {term: string}) {}
}

export class SonnetRequested implements Action {
  readonly type = SonnetActionTypes.SonnetRequested;
   constructor(public payload: {number:number}) {}
}

export class SonnetsRequested implements Action {
  readonly type = SonnetActionTypes.SonnetRequested;
   constructor(public payload: {numbers:number[]}) {}
}


export type SonnetActions = AllSonnetsRequested 
| AllSonnetsLoaded | SonnetRequested 
| SonnetsRequested | SonnetSaved;
