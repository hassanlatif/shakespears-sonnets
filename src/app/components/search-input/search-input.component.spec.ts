import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';
import { FormsModule } from '@angular/forms';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInputComponent],
      imports: [FormsModule]
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

  it('should clear search  when pressed enter', async(() => {

    spyOn(component, "handleKey");
    let searchInput = fixture.debugElement.nativeElement.querySelector('input');
    const event = new KeyboardEvent("keydown", {
      "key": "Enter"
    });
    searchInput.dispatchEvent(event);
    fixture.whenStable().then(() => {    
      expect(searchInput.value).toBe("");
    });

  }));
});
