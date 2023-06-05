import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderhistComponent } from './orderhist.component';

describe('OrderhistComponent', () => {
  let component: OrderhistComponent;
  let fixture: ComponentFixture<OrderhistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderhistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderhistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
