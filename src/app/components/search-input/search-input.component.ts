import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { SearchSonnetsRequested } from '../../store/sonnets/sonnets.actions';


@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchTerm: string;
  @Output() onSearchInput: EventEmitter<string> = new EventEmitter();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.onSearchInput.emit(this.searchTerm);
    }
  }

}
