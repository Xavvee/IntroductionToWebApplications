import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zad6MainComponent } from './zad6-main.component';

describe('Zad6MainComponent', () => {
  let component: Zad6MainComponent;
  let fixture: ComponentFixture<Zad6MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Zad6MainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zad6MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
