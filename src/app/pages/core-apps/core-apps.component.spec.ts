import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreAppsComponent } from './core-apps.component';

describe('CoreAppsComponent', () => {
  let component: CoreAppsComponent;
  let fixture: ComponentFixture<CoreAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
