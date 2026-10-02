import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArticle } from './grid-article';

describe('GridArticle', () => {
  let component: GridArticle;
  let fixture: ComponentFixture<GridArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(GridArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
