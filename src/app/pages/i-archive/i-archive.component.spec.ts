import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IArchiveComponent } from './i-archive.component';

describe('IArchiveComponent', () => {
  let component: IArchiveComponent;
  let fixture: ComponentFixture<IArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
