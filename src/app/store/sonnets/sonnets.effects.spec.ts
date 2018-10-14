import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SonnetsEffects } from './sonnets.effects';

describe('SonnetsEffects', () => {
  let actions$: Observable<any>;
  let effects: SonnetsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SonnetsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(SonnetsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
