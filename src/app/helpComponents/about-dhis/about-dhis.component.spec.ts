import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDhisComponent } from './about-dhis.component';

describe('AboutDhisComponent', () => {
  let component: AboutDhisComponent;
  let fixture: ComponentFixture<AboutDhisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutDhisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDhisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
