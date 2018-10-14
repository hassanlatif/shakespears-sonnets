import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sonnet } from './models/sonnet';
import { SonnetsService } from './services/sonnets.service';
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { LoadSonnets } from './store/sonnets/sonnet/sonnet.actions';

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
    this.store.dispatch(new LoadSonnets());
    this.sonnets$ = this.sonnetService.getSonnets();
  }

}
