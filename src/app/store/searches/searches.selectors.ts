import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearches from '../searches/searches.reducer';
import { SearchesState } from '../searches/searches.reducer';

export const selectSearchesState = createFeatureSelector<SearchesState>("searches");

export const selectAllCachedSonnets = createSelector(
    selectSearchesState,
    fromSearches.selectEntities
);

export const selectCachedSonnets = (term: string) => createSelector(
    selectAllCachedSonnets,
    searchState => {
        if (searchState[term]) {
            return searchState[term]
        }            
        else {
            return {
                term: term,
                sonnets: []
            }
        }
    }
)