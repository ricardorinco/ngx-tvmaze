import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTvmazeComponent } from './ngx-tvmaze.component';

describe('NgxTvmazeComponent', () => {
  let component: NgxTvmazeComponent;
  let fixture: ComponentFixture<NgxTvmazeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxTvmazeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTvmazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
