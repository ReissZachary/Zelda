import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScheduleViewerComponent } from './main-schedule-viewer.component';

describe('MainScheduleViewerComponent', () => {
  let component: MainScheduleViewerComponent;
  let fixture: ComponentFixture<MainScheduleViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainScheduleViewerComponent]
    });
    fixture = TestBed.createComponent(MainScheduleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
