import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSupportAppComponent } from './user-support-app.component';

describe('UserSupportAppComponent', () => {
  let component: UserSupportAppComponent;
  let fixture: ComponentFixture<UserSupportAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSupportAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSupportAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
