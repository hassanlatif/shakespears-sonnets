import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SonnetComponent } from './components/sonnet/sonnet.component';
import { SonnetsListComponent } from './components/sonnets-list/sonnets-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromSonnets from './store/sonnets/sonnets.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SonnetsEffects } from './store/sonnets/sonnets.effects';
import * as fromSearches from './store/searches/searches.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SonnetComponent,
    SonnetsListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('sonnets', fromSonnets.sonnetsReducer),
    StoreModule.forFeature('searches', fromSearches.searchesReducer), 
    EffectsModule.forFeature([SonnetsEffects]),    
    !environment.production ? StoreDevtoolsModule.instrument() : [], 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
