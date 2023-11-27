import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvisOperatorComponent } from './elvis-operator.component';

describe('ElvisOperatorComponent', () => {
  let component: ElvisOperatorComponent;
  let fixture: ComponentFixture<ElvisOperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElvisOperatorComponent]
    });
    fixture = TestBed.createComponent(ElvisOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
