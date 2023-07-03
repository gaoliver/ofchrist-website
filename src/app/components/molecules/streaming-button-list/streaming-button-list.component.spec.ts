import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingButtonListComponent } from './streaming-button-list.component';

describe('StreamingButtonListComponent', () => {
  let component: StreamingButtonListComponent;
  let fixture: ComponentFixture<StreamingButtonListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StreamingButtonListComponent]
    });
    fixture = TestBed.createComponent(StreamingButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
