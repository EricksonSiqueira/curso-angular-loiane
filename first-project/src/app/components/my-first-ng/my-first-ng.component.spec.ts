import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstNgComponent } from './my-first-ng.component';

describe('MyFirstNgComponent', () => {
  let component: MyFirstNgComponent;
  let fixture: ComponentFixture<MyFirstNgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyFirstNgComponent]
    });
    fixture = TestBed.createComponent(MyFirstNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
