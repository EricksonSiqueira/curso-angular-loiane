import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleComponent } from './cicle.component';

describe('CicleComponent', () => {
  let component: CicleComponent;
  let fixture: ComponentFixture<CicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CicleComponent]
    });
    fixture = TestBed.createComponent(CicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
