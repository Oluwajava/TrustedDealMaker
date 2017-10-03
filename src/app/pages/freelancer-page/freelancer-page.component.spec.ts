import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerPageComponent } from './freelancer-page.component';

describe('FreelancerPageComponent', () => {
  let component: FreelancerPageComponent;
  let fixture: ComponentFixture<FreelancerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreelancerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreelancerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
