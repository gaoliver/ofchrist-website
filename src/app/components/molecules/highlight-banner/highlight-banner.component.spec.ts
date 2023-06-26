import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightBannerComponent } from './highlight-banner.component';

describe('HighlightBannerComponent', () => {
  let component: HighlightBannerComponent;
  let fixture: ComponentFixture<HighlightBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightBannerComponent]
    });
    fixture = TestBed.createComponent(HighlightBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
