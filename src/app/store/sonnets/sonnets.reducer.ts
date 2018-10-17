import { Action } from '@ngrx/store';
import { Sonnet } from '../../models/sonnet';
import { SonnetActions, SonnetActionTypes } from './sonnets.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface SonnetsState extends EntityState<Sonnet> {
  allSonnetsLoaded: boolean;
}

export const adapter: EntityAdapter<Sonnet> = createEntityAdapter<Sonnet>(
  {
    selectId: sonnet => sonnet.number.toString()
  }
);

export const initialState: SonnetsState = adapter.getInitialState({
  allSonnetsLoaded: false
});

export function sonnetsReducer(state = initialState, action: SonnetActions): SonnetsState {

  switch (action.type) {

    case SonnetActionTypes.ALL_SONNETS_LOADED:
      return adapter.addAll(action.payload, { ...state, allSonnetsLoaded: true });

    case SonnetActionTypes.SAVE_SONNET_REQUESTED:
      return adapter.updateOne(action.payload.sonnet, state);

    default:
      return state;
  }

}

export const {
  selectAll,
  selectEntities,
  selectTotal,
  selectIds
} = adapter.getSelectors();