import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SonnetsState } from './sonnets/sonnets.reducer';
import * as fromSonnets from './sonnets/sonnets.reducer';
import * as fromSearches from './searches/searches.reducer';
import { SearchesState } from './searches/searches.reducer';

export const selectSonnetsState = createFeatureSelector<SonnetsState>("sonnets");
export const selectSearchesState = createFeatureSelector<SearchesState>("searches");


export const selectAllSonnets = createSelector(
    selectSonnetsState,
    fromSonnets.selectAll
);

export const isAllSonnetsLoaded = createSelector(
    selectSonnetsState,
    sonnetsState => sonnetsState.allSonnetsLoaded
);

export const searchSonnets = (term:string) => createSelector(
    selectAllSonnets,
    sonnetsState => {
        // console.log(term, sonnetsState);
        
        return sonnetsState.filter(sonnet=> sonnet.lines.toString().includes(term))
    }
);

export const selectAllCachedSonnets = createSelector(
    selectSearchesState,
    fromSearches.selectEntities
);

export const selectCachedSonnets = (term: string) => createSelector(
    selectAllCachedSonnets,
    searchState => {
        // console.log(searchState);
        
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