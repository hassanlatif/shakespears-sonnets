import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sonnet } from './models/sonnet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  sonnets$: Observable<Sonnet[]>;

  constructor() {
  }

  ngOnInit() {
  }

}
