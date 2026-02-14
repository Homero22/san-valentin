import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Valentin } from './valentin';

describe('Valentin', () => {
  let component: Valentin;
  let fixture: ComponentFixture<Valentin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Valentin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Valentin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
