import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

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
    this.index = pageNo;
  }

}
