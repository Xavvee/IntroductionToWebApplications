import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagercontrolsComponent } from './managercontrols.component';

describe('ManagercontrolsComponent', () => {
  let component: ManagercontrolsComponent;
  let fixture: ComponentFixture<ManagercontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagercontrolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagercontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
