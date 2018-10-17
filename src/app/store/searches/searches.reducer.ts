import { Action } from '@ngrx/store';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Search } from '../../models/search';
import { SearchActionTypes, SearchesActions } from './searches.actions';


export interface SearchesState extends EntityState<Search> {

}

export const adapter: EntityAdapter<Search> = createEntityAdapter<Search>(
  {
    selectId: search => search.term
  }
);

export const initialState: SearchesState = adapter.getInitialState();

export function searchesReducer(state = initialState, action: SearchesActions): SearchesState {
  switch (action.type) {

    case SearchActionTypes.SAVE_SEARCH_REQUESTED:
     return adapter.addOne(action.payload, state);

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
