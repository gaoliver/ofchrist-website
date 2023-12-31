import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHeadlineComponent } from './news-headline.component';

describe('NewsHeadlineComponent', () => {
  let component: NewsHeadlineComponent;
  let fixture: ComponentFixture<NewsHeadlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsHeadlineComponent]
    });
    fixture = TestBed.createComponent(NewsHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
