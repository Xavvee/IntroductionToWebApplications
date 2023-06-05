import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad6OutputComponent } from './zad6-output.component';

describe('Zad6OutputComponent', () => {
  let component: Zad6OutputComponent;
  let fixture: ComponentFixture<Zad6OutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad6OutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zad6OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
