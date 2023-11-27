import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentExampleComponent } from './ng-content-example.component';

describe('NgContentExampleComponent', () => {
  let component: NgContentExampleComponent;
  let fixture: ComponentFixture<NgContentExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentExampleComponent]
    });
    fixture = TestBed.createComponent(NgContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
