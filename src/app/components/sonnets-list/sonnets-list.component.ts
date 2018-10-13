import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SonnetsService } from '../../services/sonnets.service';
import { Sonnet } from '../../models/sonnet';

@Component({
  selector: 'sonnets-list',
  templateUrl: './sonnets-list.component.html',
  styleUrls: ['./sonnets-list.component.scss']
})
export class SonnetsListComponent implements OnInit {

  sonnets$ : Observable<Sonnet[]>;
  pageNum: number;

  constructor(private sonnetsService: SonnetsService) {
    
   }

   pageChanged(event) {
     console.log(event);
  
   }

  ngOnInit() {
    this.sonnets$ = this.sonnetsService.getSonnets();
  }

}
