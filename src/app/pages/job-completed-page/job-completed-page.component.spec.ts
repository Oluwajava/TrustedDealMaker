import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCompletedPageComponent } from './job-completed-page.component';

describe('JobCompletedPageComponent', () => {
  let component: JobCompletedPageComponent;
  let fixture: ComponentFixture<JobCompletedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCompletedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCompletedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
