import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerContractsComponent } from './manager-contracts.component';

describe('ManagerContractsComponent', () => {
  let component: ManagerContractsComponent;
  let fixture: ComponentFixture<ManagerContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
