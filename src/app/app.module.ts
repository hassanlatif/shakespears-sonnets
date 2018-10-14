import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SonnetComponent } from './components/sonnet/sonnet.component';
import { SonnetsListComponent } from './components/sonnets-list/sonnets-list.component';
import { SonnetsService } from './services/sonnets.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromSonnets from './store/sonnets/sonnets.reducer';

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
    StoreModule.forFeature('sonnets', fromSonnets.reducer),    
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
