import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() onSearchInputEntered: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchEnteredTerm(searchTerm) {
    this.onSearchInputEntered.emit(searchTerm);
  }

}
