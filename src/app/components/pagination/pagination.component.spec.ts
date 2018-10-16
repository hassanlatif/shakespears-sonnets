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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment index when next is pressed', () => {
    let nextBtn = fixture.debugElement.nativeElement.querySelector('#next');
    nextBtn.click();
    expect(component.index).toBe(1);

  });

  it('should decrement index when previous is pressed', () => {
    let prevBtn = fixture.debugElement.nativeElement.querySelector('#previous');
    prevBtn.click();
    expect(component.index).toBe(0);
  });  

  it('should disable previous button when start of list)', () => {
    let prevBtn = fixture.debugElement.nativeElement.querySelector('#previous');
    component.index = 0;
    fixture.detectChanges();
    expect(prevBtn.disabled).toBeTruthy();
  });

  it('should disable next butten when end of list', () => {
    let nextBtn = fixture.debugElement.nativeElement.querySelector('#next');
    component.listSize = 10;
    component.index = 9;
    fixture.detectChanges();
    expect(nextBtn.disabled).toBeTruthy();
  });

  it('should disable next butten when empty list', () => {
    let nextBtn = fixture.debugElement.nativeElement.querySelector('#next');
    component.listSize = 0;
    fixture.detectChanges();
    expect(nextBtn.disabled).toBeTruthy();
  });


});
