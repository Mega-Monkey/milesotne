import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleExcerptComponent } from './article-excerpt.component';

describe('ArticleExcerptComponent', () => {
  let component: ArticleExcerptComponent;
  let fixture: ComponentFixture<ArticleExcerptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleExcerptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleExcerptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
