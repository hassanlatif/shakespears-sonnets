import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SonnetComponent } from './components/sonnet/sonnet.component';
import { SonnetsListComponent } from './components/sonnets-list/sonnets-list.component';
import { SonnetsService } from './services/sonnets.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SonnetComponent,
    SonnetsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
