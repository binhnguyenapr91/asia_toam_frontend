import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPropertiesComponent } from './manager-properties.component';

describe('ManagerPropertiesComponent', () => {
  let component: ManagerPropertiesComponent;
  let fixture: ComponentFixture<ManagerPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
