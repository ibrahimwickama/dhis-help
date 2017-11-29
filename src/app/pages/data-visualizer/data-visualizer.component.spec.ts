import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataVisualizerComponent } from './data-visualizer.component';

describe('DataVisualizerComponent', () => {
  let component: DataVisualizerComponent;
  let fixture: ComponentFixture<DataVisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataVisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
