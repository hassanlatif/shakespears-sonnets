import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SonnetsState } from './sonnets.reducer';
import * as fromSonnets from './sonnets.reducer';

export const selectSonnetsState = createFeatureSelector<SonnetsState>("sonnets");

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
    sonnetsState => sonnetsState.filter(sonnet=> sonnet.lines.toString().includes(term))
);

