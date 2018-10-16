import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { reducers, metaReducers } from '../../store';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [FormsModule, StoreModule.forRoot(reducers, { metaReducers })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search term when pressed enter', async(() => {

    spyOn(component.onSearchInputEntered, "emit");
    const searchInput = fixture.debugElement.nativeElement.querySelector('input');
    searchInput.value = "Test";
    const event = new KeyboardEvent("keyup", {
      key: "Enter",
    });
    searchInput.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.onSearchInputEntered.emit).toHaveBeenCalledWith("Test");

  }));
});
