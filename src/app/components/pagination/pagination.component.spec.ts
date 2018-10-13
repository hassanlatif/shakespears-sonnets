import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.listSize = 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment index when next is pressed', () => {
    let nextBtn = fixture.debugElement.nativeElement.querySelector('#next');
    console.log(nextBtn);
    nextBtn.click();
    expect(component.index).toBe(1);

  });

  it('should decrement index when previous is pressed', () => {
    let prevBtn = fixture.debugElement.nativeElement.querySelector('#previous');
    console.log(prevBtn);
    prevBtn.click();
    expect(component.index).toBe(0);

  });  

});
