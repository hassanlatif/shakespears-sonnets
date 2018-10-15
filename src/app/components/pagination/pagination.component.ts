import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() listSize: number;
  index: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.index=0;
  }

  ngOnChanges(changes:SimpleChanges) {
    this.index = 0;
    this.pageChanged.emit(this.index);    
  }

  previous() {
    this.index--;
    this.pageChanged.emit(this.index);
  }

  next() {
    this.index++;
    this.pageChanged.emit(this.index);
  }

}
