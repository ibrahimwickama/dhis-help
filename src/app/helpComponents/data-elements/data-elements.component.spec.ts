import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataElementsComponent } from './data-elements.component';

describe('DataElementsComponent', () => {
  let component: DataElementsComponent;
  let fixture: ComponentFixture<DataElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
