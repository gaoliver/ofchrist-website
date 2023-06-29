import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHighlightComponent } from './video-highlight.component';

describe('VideoHighlightComponent', () => {
  let component: VideoHighlightComponent;
  let fixture: ComponentFixture<VideoHighlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoHighlightComponent]
    });
    fixture = TestBed.createComponent(VideoHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
