import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SonnetActionTypes, AllSonnetsLoaded, AllSonnetsRequested } from './sonnets.actions';
import { SonnetsService } from '../../services/sonnets.service';
import { mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AppState } from '..';
import { allSonnetsLoaded } from './sonnets.selectors';

@Injectable()
export class SonnetsEffects {

  @Effect()
  loadAllSonnets$ = this.actions$
  .pipe(
    ofType<AllSonnetsRequested>(SonnetActionTypes.AllSonnetsRequested),
    withLatestFrom(this.store.pipe(select(allSonnetsLoaded))),
    filter(([action, allSonnetsLoaded])=> !allSonnetsLoaded ),
    mergeMap(action => this.sonnetsService.getSonnets()),
    map(sonnets => new AllSonnetsLoaded(sonnets))
  );

  constructor(private actions$: Actions, 
    private sonnetsService: SonnetsService,
    private store: Store<AppState>) {

  }
  
}
