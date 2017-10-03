import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPageContentComponent } from './blog-page-content.component';

describe('BlogPageContentComponent', () => {
  let component: BlogPageContentComponent;
  let fixture: ComponentFixture<BlogPageContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPageContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
