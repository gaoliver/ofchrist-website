import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightTilesComponent } from './highlight-tiles.component';

describe('HighlightTilesComponent', () => {
  let component: HighlightTilesComponent;
  let fixture: ComponentFixture<HighlightTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightTilesComponent]
    });
    fixture = TestBed.createComponent(HighlightTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
