import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sonnet } from './models/sonnet';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { AllSonnetsRequested } from './store/sonnets/sonnets.actions';
import { selectAllSonnets, searchSonnets } from './store/sonnets/sonnets.selectors';
import { SaveSearchRequested } from './store/searches/searches.actions';
import { tap, switchMap, map } from 'rxjs/operators';
import { Search } from './models/search';
import { selectCachedSonnets } from './store/searches/searches.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  sonnets$: Observable<Sonnet[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new AllSonnetsRequested());
    this.sonnets$ = this.store
      .pipe(
        select(selectAllSonnets)
      );
  }

  searchRequested(searchTerm) {
    const tempSearch: Search = {
      term: searchTerm,
      sonnets: []
    }

    this.sonnets$ = this.store
      .pipe(
        select(selectCachedSonnets(searchTerm)),
        map(search => search.sonnets),
        switchMap(sonnets => {
          if (sonnets.length> 0) {
            return of(sonnets);
          } else {
            return this.store.pipe(
              select(searchSonnets(searchTerm)),
              tap(sonnets => {
                if (sonnets.length > 0) {
                  this.store.dispatch(new SaveSearchRequested({
                    term: searchTerm,
                    sonnets: sonnets
                  }))
                }
              })
            )
          }
        })
      );

  }

}
