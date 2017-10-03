import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegratedProjectComponent } from './integrated-project.component';

describe('IntegratedProjectComponent', () => {
  let component: IntegratedProjectComponent;
  let fixture: ComponentFixture<IntegratedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntegratedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegratedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
