import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageTitleComponent } from './content-page-title.component';

describe('ContentPageTitleComponent', () => {
  let component: ContentPageTitleComponent;
  let fixture: ComponentFixture<ContentPageTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPageTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
