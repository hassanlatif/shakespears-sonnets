import { sonnetsReducer, initialState } from './sonnets.reducer';
import * as fromSonnets from './sonnets.reducer';
import * as fromActions from './sonnets.actions';
import { EntityState, Update } from '@ngrx/entity';
import { Sonnet } from '../../models/sonnet';

describe('Sonnets Reducer', () => {

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = sonnetsReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });


  describe('AllSonnetsLoaded action', () => {
    it('should set allSonnetsLoaded to true', () => {

      const action = new fromActions.AllSonnetsLoaded([]);
      const state = fromSonnets.sonnetsReducer(initialState, action);
      expect(state.allSonnetsLoaded).toBe(true);
    });
  });

});
