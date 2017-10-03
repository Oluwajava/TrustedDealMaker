import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedAccountComponent } from './trusted-account.component';

describe('TrustedAccountComponent', () => {
  let component: TrustedAccountComponent;
  let fixture: ComponentFixture<TrustedAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrustedAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
