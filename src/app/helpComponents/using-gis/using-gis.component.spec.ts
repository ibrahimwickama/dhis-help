import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingGisComponent } from './using-gis.component';

describe('UsingGisComponent', () => {
  let component: UsingGisComponent;
  let fixture: ComponentFixture<UsingGisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingGisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingGisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
