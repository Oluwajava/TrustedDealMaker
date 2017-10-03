import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponentComponent } from './home-page.component';

describe('HomePageComponentComponent', () => {
  let component: HomePageComponentComponent;
  let fixture: ComponentFixture<HomePageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
