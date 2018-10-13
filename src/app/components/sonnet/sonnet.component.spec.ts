import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonnetComponent } from './sonnet.component';

describe('SonnetComponent', () => {
  let component: SonnetComponent;
  let fixture: ComponentFixture<SonnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonnetComponent);
    component = fixture.componentInstance;
    component.sonnet = {number: "1", lines:["abc"]};
    fixture.detectChanges();
  });

  it(`should have a sonnet`, () => {
    fixture.detectChanges();
    expect(component.sonnet).toBeDefined();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
