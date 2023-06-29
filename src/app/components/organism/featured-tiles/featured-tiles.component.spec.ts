import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTilesComponent } from './featured-tiles.component';

describe('FeaturedTilesComponent', () => {
  let component: FeaturedTilesComponent;
  let fixture: ComponentFixture<FeaturedTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedTilesComponent]
    });
    fixture = TestBed.createComponent(FeaturedTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
