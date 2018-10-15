import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));
  
  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should create a search-input', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('search-input')).not.toBe(null);
  }));


  it('should create a sonnets-list', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('sonnets-list')).not.toBe(null);
  }));


});
