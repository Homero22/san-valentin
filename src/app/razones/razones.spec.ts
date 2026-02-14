import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Razones } from './razones';

describe('Razones', () => {
  let component: Razones;
  let fixture: ComponentFixture<Razones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Razones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Razones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
