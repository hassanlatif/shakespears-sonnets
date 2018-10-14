import { Action } from '@ngrx/store';


export interface SonnetsState {

}

export const initialState: SonnetsState = {

};

export function reducer(state = initialState, action: Action): SonnetsState {
  switch (action.type) {

    default:
      return state;
  }
}
