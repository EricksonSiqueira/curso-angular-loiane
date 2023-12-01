import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsNotFoundComponent } from './students-not-found.component';

describe('StudentsNotFoundComponent', () => {
  let component: StudentsNotFoundComponent;
  let fixture: ComponentFixture<StudentsNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsNotFoundComponent]
    });
    fixture = TestBed.createComponent(StudentsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
