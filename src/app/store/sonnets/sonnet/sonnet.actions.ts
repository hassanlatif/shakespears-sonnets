import { Action } from '@ngrx/store';

export enum SonnetActionTypes {
  LoadSonnets = '[Sonnet] Load Sonnets'
}

export class LoadSonnets implements Action {
  readonly type = SonnetActionTypes.LoadSonnets;
}

export type SonnetActions = LoadSonnets;
