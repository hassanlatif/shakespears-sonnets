import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SonnetActionTypes, AllSonnetsLoaded, AllSonnetsRequested } from './sonnets.actions';
import { SonnetsService } from '../../services/sonnets.service';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class SonnetsEffects {

  @Effect()
  loadAllSonnets$ = this.actions$
  .pipe(
    ofType<AllSonnetsRequested>(SonnetActionTypes.AllSonnetsRequested),
    mergeMap(action => this.sonnetsService.getSonnets()),
    map(sonnets => new AllSonnetsLoaded(sonnets))
  );

  constructor(private actions$: Actions, private sonnetsService: SonnetsService) {

  }
  
}
