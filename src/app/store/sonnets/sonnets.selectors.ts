import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SonnetsState} from './sonnets.reducer';
import * as fromSonnets from './sonnets.reducer'

export const selectSonnetsState = createFeatureSelector<SonnetsState>("sonnets");

export const selectSonnetByNumber = (number:number) => createSelector(
    selectSonnetsState,
    sonnetsState => sonnetsState.entities[number]
)

export const selectAllSonnets = createSelector(
    selectSonnetsState,
    fromSonnets.selectAll
)