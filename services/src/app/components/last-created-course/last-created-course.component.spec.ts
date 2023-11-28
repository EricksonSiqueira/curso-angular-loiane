import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCreatedCourseComponent } from './last-created-course.component';

describe('LastCreatedCourseComponent', () => {
  let component: LastCreatedCourseComponent;
  let fixture: ComponentFixture<LastCreatedCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastCreatedCourseComponent]
    });
    fixture = TestBed.createComponent(LastCreatedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
