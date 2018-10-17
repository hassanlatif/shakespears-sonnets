import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, ReplaySubject } from 'rxjs';
import { hot, cold, getTestScheduler } from 'jasmine-marbles';

import { SonnetsEffects } from './sonnets.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '..';
import { SonnetsService } from '../../services/sonnets.service';
import { SonnetActionTypes, AllSonnetsLoaded, AllSonnetsRequested, SearchSonnetsRequested } from './sonnets.actions';
import { EffectsModule } from '@ngrx/effects';
// import { EffectsTestingModule } from '@ngrx/effects/testing'
import * as fromSonnets from './sonnets.reducer';


describe('SonnetsEffects', () => {
  let actions$: Observable<any>;
  let effects: SonnetsEffects;
  let service: any;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      StoreModule.forRoot(reducers, { metaReducers }),
      // EffectsModule.forRoot([]),
      StoreModule.forFeature('sonnets', fromSonnets.sonnetsReducer),
      // EffectsModule.forFeature([SonnetsEffects]),          
      ],
      providers: [
        SonnetsEffects,
        provideMockActions(() => actions$),
        {
          provide: SonnetsService,
          useValue: jasmine.createSpyObj('SonnetsService', ['getSonnets'])
        }
      ]
    });

    effects = TestBed.get(SonnetsEffects);
    service = TestBed.get(SonnetsService);

  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should invoke action AllSonnetsLoaded when action AllSonnetsRequested is invoked', () => {

    const actions = new ReplaySubject(1);

    actions.next(new AllSonnetsRequested());

    effects.loadAllSonnets$.subscribe(result => {
      expect(result).toEqual(new AllSonnetsLoaded([]));
    });
  });

  
});

