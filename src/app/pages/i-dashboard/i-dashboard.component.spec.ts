import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDashboardComponent } from './i-dashboard.component';

describe('IDashboardComponent', () => {
  let component: IDashboardComponent;
  let fixture: ComponentFixture<IDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
