import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthboardComponent } from './authboard.component';

describe('AuthboardComponent', () => {
  let component: AuthboardComponent;
  let fixture: ComponentFixture<AuthboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
