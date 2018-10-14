import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SonnetsService } from '../../services/sonnets.service';

import { SonnetsListComponent } from './sonnets-list.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SonnetComponent } from '../sonnet/sonnet.component';

import {from} from 'rxjs';

describe('SonnetsListComponent', () => {
  let component: SonnetsListComponent;
  let fixture: ComponentFixture<SonnetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonnetsListComponent, SonnetComponent, PaginationComponent ],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonnetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  // it('should load sonnets', async(() => {
    
  //   let service = TestBed.get(SonnetsService);
  //   spyOn(service, 'getSonnets').and.returnValue(from([ {number: "1", lines:["hello"]} ]));
  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => { 
  //     component.sonnets.subscribe(result => expect(result.length).toBeGreaterThan(0));
  //   });

  // }));

});
