import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonnetComponent } from './sonnet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, metaReducers } from '../../store';


describe('SonnetComponent', () => {
  let component: SonnetComponent;
  let fixture: ComponentFixture<SonnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonnetComponent ],
      imports: [FormsModule, ReactiveFormsModule,
        StoreModule.forRoot(reducers, { metaReducers })],
        providers: [Store]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonnetComponent);
    component = fixture.componentInstance;
    component.sonnet = {number: "1", lines:["abc", "def", "ghi"]};
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain a form with lines control', () => {
    expect(component.sonnetForm.contains('lines')).toBeTruthy();
  })

  it('should toggle edit mode when pencil is pressed', () => {
    component.editMode = false;
    fixture.detectChanges();    
    let editBtn = fixture.debugElement.nativeElement.querySelector('#pencil');
    editBtn.click();
    expect(component.editMode).toBeTruthy();

  });

});
