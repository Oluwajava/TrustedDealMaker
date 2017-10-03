import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePostedComponent } from './service-posted.component';

describe('ServicePostedComponent', () => {
  let component: ServicePostedComponent;
  let fixture: ComponentFixture<ServicePostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
