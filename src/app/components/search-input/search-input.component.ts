import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

  handleKey(event: any) {
    if (event.keyCode === 13) {
      console.log(this.searchTerm);
      this.searchTerm = '';
    }
  }

}
