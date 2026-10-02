import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landscapes } from './landscapes';

describe('Landscapes', () => {
  let component: Landscapes;
  let fixture: ComponentFixture<Landscapes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landscapes],
    }).compileComponents();

    fixture = TestBed.createComponent(Landscapes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
