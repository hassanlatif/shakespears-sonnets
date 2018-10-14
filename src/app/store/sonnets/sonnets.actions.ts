import { Action } from '@ngrx/store';
import { Sonnet } from '../../models/sonnet';

export enum SonnetActionTypes {
  AllSonnetsRequested = '[Sonnets List Page] All Sonnets Requested',
  AllSonnetsLoaded = '[Sonnets API] All Sonnets Loaded',
  SonnetRequested = '[Sonnet Page] Sonnet Requested',
  SonnetsRequested = '[Sonnet Page] Sonnets Requested'
}

export class AllSonnetsRequested implements Action {
  readonly type = SonnetActionTypes.AllSonnetsRequested;
}

export class AllSonnetsLoaded implements Action {
  readonly type = SonnetActionTypes.AllSonnetsLoaded;
  constructor(public payload: Sonnet[]) {
    
  }
}

export class SonnetRequested implements Action {
  readonly type = SonnetActionTypes.SonnetRequested;
   constructor(public payload: {number:number}) {}
}

export class SonnetsRequested implements Action {
  readonly type = SonnetActionTypes.SonnetRequested;
   constructor(public payload: {numbers:number[]}) {}
}


export type SonnetActions = AllSonnetsRequested | AllSonnetsLoaded | SonnetRequested | SonnetsRequested;
