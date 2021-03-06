import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Sonnet } from './models/sonnet';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { AllSonnetsRequested } from './store/sonnets/sonnets.actions';
import { selectAllSonnets, searchSonnets } from './store/sonnets/sonnets.selectors';

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
    this.sonnets$ = this.store
    .pipe(
      select(searchSonnets(searchTerm))
    )
  }

}
