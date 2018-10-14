import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sonnet } from './models/sonnet';
import { SonnetsService } from './services/sonnets.service';
import { Store, select } from '@ngrx/store';
import { AppState } from './store';
import { AllSonnetsRequested } from './store/sonnets/sonnets.actions';
import { selectSonnetByNumber, selectAllSonnets } from './store/sonnets/sonnets.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  sonnets$: Observable<Sonnet[]>;

  constructor(private sonnetService: SonnetsService, private store: Store<AppState>) {
    
  }

  ngOnInit() {

    // this.store.dispatch(new LoadSonnets());
    // this.sonnets$ = this.sonnetService.getSonnets();

    this.store.dispatch(new AllSonnetsRequested());

    
    this.sonnets$ = this.store
    .pipe(
      select(selectAllSonnets)
    );

  }

}
