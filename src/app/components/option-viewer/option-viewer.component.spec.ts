import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionViewerComponent } from './option-viewer.component';

describe('OptionViewerComponent', () => {
  let component: OptionViewerComponent;
  let fixture: ComponentFixture<OptionViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
