import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SonnetsService } from '../../services/sonnets.service';
import { Sonnet } from '../../models/sonnet';

@Component({
  selector: 'sonnets-list',
  templateUrl: './sonnets-list.component.html',
  styleUrls: ['./sonnets-list.component.scss']
})
export class SonnetsListComponent implements OnInit {

  @Input() sonnets;
  index: number;

  constructor() {
    
   }

  ngOnInit() {
    this.index = 0;
  }

  pageChange(pageNo) {
    console.log(pageNo);
  }

}
