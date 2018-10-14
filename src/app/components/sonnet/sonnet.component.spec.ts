import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SonnetComponent } from './sonnet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SonnetComponent', () => {
  let component: SonnetComponent;
  let fixture: ComponentFixture<SonnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonnetComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonnetComponent);
    component = fixture.componentInstance;
    component.sonnet = {number: "1", lines:["abc"]};
    fixture.detectChanges();
  });

  it('should have a sonnet', () => {
    fixture.detectChanges();
    expect(component.sonnet).toBeDefined();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should contain a form with two contorls', () => {
    expect(component.sonnetForm.contains('number')).toBeTruthy();
    expect(component.sonnetForm.contains('lines')).toBeTruthy();
  })

  it('should toggle edit mode when pencil is pressed', () => {
    component.editMode = false;
    fixture.detectChanges();    
    let editBtn = fixture.debugElement.nativeElement.querySelector('#pencil');
    editBtn.click();
    expect(component.editMode).toBeTruthy();

  });

  it('should untoggle edit mode when check is pressed', () => {
    component.editMode = true;
    fixture.detectChanges();
    let okBtn = fixture.debugElement.nativeElement.querySelector('#check');
    okBtn.click();
    expect(component.editMode).toBeFalsy();

  });  

});
