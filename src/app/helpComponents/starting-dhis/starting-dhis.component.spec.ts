import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingDhisComponent } from './starting-dhis.component';

describe('StartingDhisComponent', () => {
  let component: StartingDhisComponent;
  let fixture: ComponentFixture<StartingDhisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingDhisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingDhisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
