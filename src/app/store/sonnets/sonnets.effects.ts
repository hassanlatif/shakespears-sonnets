import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SonnetActionTypes, AllSonnetsLoaded, AllSonnetsRequested } from './sonnets.actions';
import { SonnetsService } from '../../services/sonnets.service';
import { mergeMap, map, withLatestFrom, filter, catchError } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '..';
import { isAllSonnetsLoaded } from './sonnets.selectors';
import { of } from 'rxjs';

@Injectable()
export class SonnetsEffects {

  @Effect()
  loadAllSonnets$ = this.actions$
  .pipe(
    ofType<AllSonnetsRequested>(SonnetActionTypes.ALL_SONNETS_REQUESTED),
    withLatestFrom(this.store.pipe(select(isAllSonnetsLoaded))),
    filter(([action, allSonnetsLoaded])=> !allSonnetsLoaded ),
    mergeMap(action => this.sonnetsService.getSonnets().pipe(
      catchError(error=> {
        console.error(error);
        alert('An error occured while fetching data, please try again later');
        return of([]);
      })  
    )),
    map(sonnets => new AllSonnetsLoaded(sonnets)),
  );
  
  constructor(private actions$: Actions, 
    private sonnetsService: SonnetsService,
    private store: Store<AppState>) {

  }
  
}
