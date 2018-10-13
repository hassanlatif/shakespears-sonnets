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
  index: number;

  constructor(private sonnetsService: SonnetsService) {
    
   }


  ngOnInit() {
    this.sonnets$ = this.sonnetsService.getSonnets();
    this.index = 0;
  }

  pageChange(pageNo) {
    console.log(pageNo);
  }

}
