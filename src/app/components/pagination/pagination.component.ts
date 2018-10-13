import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() listSize: number;
  index: number;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.index=0;
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
