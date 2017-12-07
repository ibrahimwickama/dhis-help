import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsModuleComponent } from './reports-module.component';

describe('ReportsModuleComponent', () => {
  let component: ReportsModuleComponent;
  let fixture: ComponentFixture<ReportsModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
